
import React from 'react'

import LoginSignUpContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginSignUpContainer.js"
import NotFound from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/NotFound.js"

import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import UserProfileContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js"
import GetWordPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/GetWord/GetWordPageContainer.js"
import LearnResultsPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/LearnResultsPageContainer.js"
import LearnGameContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageContainer.js"
import ResultWordPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPageContainer.js"
import WordBoardPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPageContainer.js"
import LearnPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageContainer.js"

class GameContainer extends React.Component {
  //maybe not need constructor here? send active user info here???
  constructor() {
    super()
    //keep track of current user
    this.state = {
      allUsers: [],
      currentActiveUser: null,
      isLoggedIn: false,
      currentActiveUserUsername: "",
      UsersWords: [],
      UserActiveWords: [],

      currentSearchWord: {},
      searchedWords: []
    }
  }

  setSearchWord = (data) => {
    console.log("you searched for ", data)

    this.setState({
      searchedWords: [...this.state.searchedWords, data],
      currentSearchWord: data
    })
    this.searchResultWord(data)
  }

  searchResultWord = (data) => {
    console.log("go to results with ",data)
  }

  setActiveUser = (foundProfile)=>{
    console.log("current user is ", foundProfile)
    this.setState({
      currentActiveUser: foundProfile ,
      currentActiveUserUsername: foundProfile.username
    })
    //pass this prop to user profile
  }


  componentDidMount(){
    //can fetch users or words from database

  }

  // const key = `${process.env.REACT_APP_WORD_API_KEY}`
  // console.log("API", key)

  // I am a Game Container
  // and a randomwords array:
  // <p>{randomWordOfTheDay}</p>

  render() {

    return (
      <div>
      {this.state.currentActiveUser != null ?
        (<div>
          <UserProfileContainer currentActiveUser={this.state.currentActiveUser}/>

        </div>) :
      null }

      <Switch>

        <Route exact path="/" render={() => <Redirect to="/login" />} />

        <Route exact path="/login" render={() => <LoginSignUpContainer setActiveUser={this.setActiveUser}/>} />
        // <Route path="/signup" render={() => <LoginSignUpContainer />} />
        <Route exact path="/getword" render={() => <GetWordPageContainer currentActiveUser={this.state.currentActiveUser} setSearchWord={this.setSearchWord} />} />
        <Route exact path="/resultword" render={() => <ResultWordPageContainer
          currentActiveUser={this.state.currentActiveUser} searchWord= {this.state.currentSearchWord} /> } />
        <Route path="/wordboard" render={() => <WordBoardPageContainer />} />
        <Route path="/learngame" render={() => <LearnPageContainer />} />
        <Route path="/learnresult" render={() => <LearnResultsPageContainer />} />
        <Route component={NotFound} />

      </Switch>
      </div>
    )
  }
}



export default withRouter(GameContainer)

// <WordStartGameContainer currentActiveUser={this.state.currentActiveUser} setSearchWord={this.setSearchWord} searchWord={this.state.currentSearchWord}/>
