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
      fetch("http://localhost:3000/words/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newWordData)
      })
      .then(response => response.json())
      .then(data => {
        this.addUserWord(data)

//have a function to refresh back end to reflect changes
        // this.check()

        this.props.setSearchWord(data)

        this.props.history.push("/resultword")

      } )
    }
  }

  // check(){
  //   fetch("http://localhost:3000/users/")
  //   .then(response => response.json())
  //   .then(dataObject => {console.log("fecthing again",dataObject)})
  // }

  //adding a word to the logged in user-make generic with access to userobj
  addUserWord=(data)=> {
    console.log("I am going to post this data to this user",data)
    console.log(this.props.currentActiveUser)
    let wordId = data.id
    let userId = this.props.currentActiveUser.id

      let newUserWord={
    user_id: userId,
    word_id: wordId,
    activeword: false
      }
    fetch("http://localhost:3000/user_words",
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUserWord)
    })
    .then(response => response.json())
    .then(data => console.log("you are here",data))


  }




  handleSubmit = (event) => {
    event.preventDefault()

    let searchWord = document.querySelector("#SearchWord").value
    let key = "X-Mashape-Key"
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

  getRandomWord = () => {
    console.log("I am searching a random word")

    let randomApi = "https://wordsapiv1.p.mashape.com/words"
    let key = "X-Mashape-Key"
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

  searchRandomWord = (data)=>{
    console.log("looking up", data.word)
    let randomWord = data.word
    let key = "X-Mashape-Key"
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
      <p>I am a get word page</p>

    <UserProfileContainer />
      I am a GetWordPageContainer, with a user profile component
      <h1>
       Start Learning a New Word Today {this.props.currentActiveUser.username}
      </h1>
      <GetWordPageComponent handleSubmit={this.handleSubmit} />
      <p>OR</p>
      <button onClick = {this.getRandomWord}> Search Random Word</button>
      </div>
    )
  }
}
export default withRouter(GetWordPageContainer)
