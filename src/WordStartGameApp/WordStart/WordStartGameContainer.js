//IN RENDER,import on each page Userprofile container , render userProfile page contianer first
import React from 'react'
import { withRouter } from 'react-router-dom'

import GetWordPageContainer from './GetWord/GetWordPageContainer'
import ResultWordPageContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPageContainer.js'
import WordBoardPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPageContainer.js"
import LearnGameContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameContainer.js'
import UserProfileContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js"

class WordStartGameContainer extends React.Component{
  //is going to be passed in current active user state info,
  //make a get fetch call to find all words for that user and add alluserword array , and  useractive word array

  //add keith user url,id stuff here and add that info to Userprofile container
  //do keith stuff here
  constructor(){
    super()
    this.state = {
      User:{

      },
      UsersWords: [],

      UserActiveWords: [],

      currentSearchWord: {},
      searchedWords: []


    }
  }


  setSearchWord = (data) => {

    console.log(this)
    console.log("you searched for ", data)
  
    this.setState({
      searchedWords: [...this.state.searchedWords, data]
    })
    this.searchResultWord(data)
  }

  searchResultWord = (data) => {
    console.log("go to results with ",data)

  }
// <WordBoardPageContainer />
// <LearnGameContainer />

  render(){
    console.log(this.props)

    return(
      <div>
      I am a WordStartGameContainer lets start learning new words
      { this.props.location.pathname == "/getword" ?
      <GetWordPageContainer setSearchWord={this.setSearchWord}  />
      :      null

       }
       { this.props.location.pathname == "/resultword" ?
       <ResultWordPageContainer searchWord = {this.state.searchedWords[this.state.searchedWords.length -1 ]}/>
       :  null

        }
        { this.props.location.pathname == "/wordboard" ?
        <WordBoardPageContainer />
        :  null

         }
         { this.props.location.pathname == "/learngame" ?
         <LearnGameContainer />
         :  null

          }
          { this.props.location.pathname == "/learnresult" ?
          <LearnGameContainer />
          :  null

           }
      </div>
    )
  }

}
export default withRouter(WordStartGameContainer);
