
import React from 'react'
import LoginSignUpContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginSignUpContainer.js"
import NotFound from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/NotFound.js"
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import UserProfileContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js"
import GetWordPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/GetWord/GetWordPageContainer.js"
import LearnResultsPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/LearnResultsPageContainer.js"
import ResultWordPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPageContainer.js"
import WordBoardPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPageContainer.js"
import LearnPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageContainer.js"

class GameContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      allUsers: [],
      currentActiveUser: null,
      currentActiveUserUsername: "",
      copyArrayGame:[],
      finalAnsArray: [],
      currentUserWords: [],
      currentSearchWord: {},
      searchedWords: []
    }
  }

  updateUserInfo= (data)=>{
    console.log("trying to update user info of", data)
    fetch("http://localhost:3000/users/")
    .then(response => response.json())
    .then(dataObject => this.setAllUsersGame(dataObject))
  }

  setAllUsersGame = (dataObject) => {
    this.setState({
      allUsers: dataObject
    })
    this.getUpdatedUserInfo(this.state.allUsers)
  }

  getUpdatedUserInfo = (data) => {
    console.log("this is all current users",data)
    if(this.state.currentActiveUser != null){
      var updatedUserInfo = this.state.allUsers.find( profile => profile.username === this.state.currentActiveUser.username)
    }
      console.log("updated user info",updatedUserInfo  )
      this.setState({
        currentActiveUser: updatedUserInfo ,
        currentActiveUserUsername: updatedUserInfo.username

      })
      this.setCopyArray(this.state.currentUserWords)
  }

  setCopyArray = (data) => {
    this.setState({
      copyArrayGame:this.state.currentUserWords

    })
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
    this.setState({
      currentUserWords: [...this.state.currentActiveUser.words, data]
    })
  }

  setActiveUser = (foundProfile)=>{
    console.log("current user is ", foundProfile)
    this.setState({
      currentActiveUser: foundProfile ,
      currentActiveUserUsername: foundProfile.username
    })
  }

  setFinalAnsArray = (data) => {
    this.setState({
      finalAnsArray: [...data]
    })
  }

  resetLearnGame = () => {
    this.setState({
      copyArrayGame: [...this.state.currentUserWords]
    })
  }

  deleteUserWord = (id) => {
    console.log("trying to delete this id ", id)
    let wordToDelete = this.state.currentActiveUser.words.find(wordObj => wordObj.id === id)
    console.log("delete this word", wordToDelete)

    fetch(`http://localhost:3000/words/${wordToDelete.id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log("remove from front end",data)
        let filteredUserWords = this.state.currentUserWords.filter(wordObj => wordObj.id !== id)
      this.setState({
        currentUserWords: [...filteredUserWords],
        copyArrayGame: [...filteredUserWords],
        currentActiveUser: {...this.state.currentActiveUser, words: [...filteredUserWords]}      })
    })
  }


  render() {

    return (
      <div>
      {this.state.currentActiveUser != null ?
        (<div>
          <UserProfileContainer currentActiveUser={this.state.currentActiveUser}/>

        </div>) :
      null }

      <Switch>

        <Route exact path="/" render={() => <Redirect to="/login" />
        }/>

        <Route exact path="/login" render={() => <LoginSignUpContainer setActiveUser={this.setActiveUser}/>
        }/>

        <Route exact path="/signup" render={() => <LoginSignUpContainer setActiveUser={this.setActiveUser}/>
        }/>

        <Route exact path="/getword" render={() => <GetWordPageContainer currentActiveUser={this.state.currentActiveUser} setSearchWord={this.setSearchWord} />
        }/>

        <Route exact path="/resultword" render={() => <ResultWordPageContainer
          currentActiveUser={this.state.currentActiveUser} searchWord= {this.state.currentSearchWord} updateUserInfo={this.updateUserInfo} />
        }/>

        <Route path="/wordboard" render={() => <WordBoardPageContainer  currentUserWords={this.state.currentUserWords}
        deleteUserWord = {this.deleteUserWord}
        currentActiveUser={this.state.currentActiveUser}/>
        }/>

        <Route path="/learngame" render={() => <LearnPageContainer currentUserWords={this.state.currentUserWords}
        copyArrayGame ={this.state.copyArrayGame}
        setFinalAnsArray = {this.setFinalAnsArray}/>
        }/>

        <Route path="/learnresult" render={() => <LearnResultsPageContainer currentUserWords={this.state.currentUserWords} finalAnsArray={this.state.finalAnsArray}
        resetLearnGame={this.resetLearnGame}
        currentActiveUser = {this.state.currentActiveUser} />
        }/>

        <Route component={NotFound} />

      </Switch>
      </div>
    )
  }
}

export default withRouter(GameContainer)
