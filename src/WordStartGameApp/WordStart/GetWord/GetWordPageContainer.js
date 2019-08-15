import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import GetWordPageComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/GetWord/GetWordPage/GetWordPageComponent.js'
import {withRouter , Link}  from "react-router-dom"

class GetWordPageContainer extends React.Component {
  //this need to be passed in user state info from WordStartGameContainer

  //stuff todo on get a word GetWordPage

  // on submit of this form its for to make a fetch call to api to get word search results,
  //if word exist add this word to UserWords state info,add this word to UserWords array in the DB(patch request), also say activeWord state
  //then transfer to results page with the fetch call results
  //if false don't add to UserState state info, but still go to results page

  //make a post request to add new word to word DB
  constructor(){
    super()
    this.state = {
    }
  }


  postWord = (data) => {
    console.log("make a word", data)
    if (data.message || !data.results){
      alert("this is not an english word")
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
      fetch("http://localhost:3000/words/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newWordData)
      })
      .then(response => response.json())
      .then(data => {
        this.props.setSearchWord(data)
        this.props.history.push("/resultword")

      } )
    }
  }




  handleSubmit = (event) => {
    event.preventDefault()
    let apiUrl = "https://wordsapiv1.p.mashape.com/words"
    let searchWord = document.querySelector("#SearchWord").value
    let key = "X-Mashape-Key"
    let value = `${process.env.REACT_APP_WORD_API_KEY}`
    var request = new Request(`https://wordsapiv1.p.mashape.com/words/${searchWord}`, {
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




  render(){
    return(
      <div>
      <p>I am a get word page</p>
      <UserProfileContainer />
      I am a GetWordPageContainer, with a user profile component
      <GetWordPageComponent handleSubmit={this.handleSubmit}/>

      </div>
    )
  }
}
export default withRouter(GetWordPageContainer)
