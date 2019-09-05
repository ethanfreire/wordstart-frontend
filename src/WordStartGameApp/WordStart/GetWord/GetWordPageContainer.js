import React from 'react'
import UserProfileContainer from '../UserProfile/UserProfileContainer.js'
import GetWordPageComponent from './GetWordPage/GetWordPageComponent.js'
import {withRouter}  from "react-router-dom"

class GetWordPageContainer extends React.Component {

  //make a post request to add new word to word DB
  postWord = (data) => {
    console.log("make a word", data)
    if (data.message ){
      alert("this is not an english word")
      document.querySelector("#SearchWord").value = ""
    }
    else if (!data.results) {
      alert("there is not enough information on this word")
      document.querySelector("#SearchWord").value = ""
    }
    else{
      let newWordData = {
        word: data.word,
        definition: data.results[0].definition ? data.results[0].definition : "this word has no definition avaliable"
        ,
        synonym: data.results[0].synonyms ? data.results[0].synonyms.toString() : "this word has no synonym avaliable"
        ,
        part_of_speech: data.results[0].partOfSpeech ? data.results[0].partOfSpeech : "this word has no parts of speech avaliable"
        ,
        examples: data.results[0].examples  ? data.results[0].examples[0] : "this word has no examples avaliable"
        ,
        canvas_image: false
      }

      document.querySelector("#SearchWord").value = ""

      console.log("lets make a fetch on", newWordData)
      fetch("https://wordstart-backend.herokuapp.com/words/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newWordData)
      })
      .then(response => response.json())
      .then(data => {
        this.addUserWord(data)
        this.props.setSearchWord(data)
        this.props.history.push("/resultword")
      } )
    }
  }

  //adding a word to the logged in user
  addUserWord=(data)=> {
    console.log("I am going to post this data to this user", data)
    console.log(this.props.currentActiveUser)
    let wordId = data.id
    let userId = this.props.currentActiveUser.id
    let newUserWord={
    user_id: userId,
    word_id: wordId,
    activeword: false
      }

    fetch("https://wordstart-backend.herokuapp.com/user_words",
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUserWord)
    })
    .then(response => response.json())
    .then(data => console.log("you are here",data))
  }

  //make a fetch call to search an english word.
  handleSubmit = (event) => {
    event.preventDefault()

    let searchWord = document.querySelector("#SearchWord").value
    let value = `${process.env.REACT_APP_WORD_API_KEY}`
    let request = new Request(`https://wordsapiv1.p.mashape.com/words/${searchWord}`, {
      headers: new Headers({
        'X-Mashape-Key': value
      })
    })
    console.log("trying to search for",searchWord)
    fetch(request)
    .then(response => response.json())
    .then(data =>  {
      this.postWord(data)
    })
  }

  //get a random english word
  getRandomWord = () => {
    console.log("I am searching a random word")

    let value = `${process.env.REACT_APP_WORD_API_KEY}`
    let request = new Request(`https://wordsapiv1.p.mashape.com/words/?random=true`,
      {
      headers: new Headers({
        'X-Mashape-Key': value
      })
    })
    fetch(request)
    .then(response => response.json())
    .then(data =>  {
      this.searchRandomWord(data)
    })
  }

  //found a random word, make a fetch call on random word.
  searchRandomWord = (data)=>{
    console.log("looking up", data.word)
    let randomWord = data.word
    let value = `${process.env.REACT_APP_WORD_API_KEY}`
    let request = new Request(`https://wordsapiv1.p.mashape.com/words/${randomWord}`, {
      headers: new Headers({
        'X-Mashape-Key': value
      })
    })
    console.log("making a search for",randomWord)
    fetch(request)
    .then(response => response.json())
    .then(data =>  {
      console.log(data)
      if(data.results){
        this.postWord(data)
      }else{
        this.getRandomWord()
      }
    })
  }

  render(){
    console.log(this.props.currentActiveUser)
    return(
      <div>
        <UserProfileContainer />
          <h1>
            Start Learning a New Word Today {this.props.currentActiveUser.username}
          </h1>
        <GetWordPageComponent handleSubmit={this.handleSubmit} />

        <div className="ui large header fixSpacingOR">
          OR
        </div>
        <div className="loading">
          <button className="ui button" onClick = {this.getRandomWord}> Search Random Word</button>
        </div>
      </div>
    )
  }
}
export default withRouter(GetWordPageContainer)
