//IN RENDER,import on each page Userprofile container , render userProfile page contianer first
import React from 'react'
import GetWordPageContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/GetWord/GetWordPageContainer.js'
import ResultWordPageContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPageContainer.js'
import WordBoardPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPageContainer.js"
import LearnGameContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameContainer.js'

class WordStartGameContainer extends React.Component{
  //is going to be passed in current active user state info,
  //make a get fetch call to find all words for that user and add alluserword array , and  useractive word array
  constructor(){
    super()
    this.state = {
      User:{

      },
      UsersWords: [],

      UserActiveWords: []

    }
  }

  componentDidMount(){
    //can fetch users or words from database
  fetch("http://localhost:3000/users/")
  .then(response => response.json())
  .then(dataObject => console.log(dataObject))

}

// <WordBoardPageContainer />
// <LearnGameContainer />
// <ResultWordPageContainer />

  render(){
    return(
      <div>
      I am a WordStartGameContainer lets start learning new words
      <GetWordPageContainer />

      </div>
    )
  }

}
export default WordStartGameContainer;
