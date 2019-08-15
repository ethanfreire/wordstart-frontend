
import React from 'react'

import LoginSignUpContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginSignUpContainer.js"
import NotFound from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/NotFound.js"
import WordStartGameContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordStartGameContainer.js"
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class GameContainer extends React.Component {
  //maybe not need constructor here? send active user info here???
  constructor() {
    super()
    //keep track of current user
    this.state = {
      allUsers: [],
      currentActiveUser:{},
      isLoggedIn: false
    }
  }


  componentDidMount(){
    //can fetch users or words from database
  fetch("http://localhost:3000/users/")
  .then(response => response.json())
  .then(dataObject => this.setAllUsers(dataObject))
}


  setAllUsers = (dataObject) => {
    console.log("hi",dataObject)
    this.setState({
      allUsers: dataObject
    })
  }

  // const key = `${process.env.REACT_APP_WORD_API_KEY}`
  // console.log("API", key)

  // I am a Game Container
  // and a randomwords array:
  // <p>{randomWordOfTheDay}</p>

  render() {

    return (
      <div>
      <Switch>

      <Route exact path="/" render={() => <Redirect to="/login" />} />

      <Route path="/login" render={() => <LoginSignUpContainer />} />
      <Route path="/signup" render={() => <LoginSignUpContainer />} />
      <Route path="/getword" render={() => <WordStartGameContainer />} />
      <Route path="/resultword" render={() => <WordStartGameContainer />} />
      <Route path="/wordboard" render={() => <WordStartGameContainer />} />
      <Route path="/learngame" render={() => <WordStartGameContainer />} />
      <Route path="/learnresult" render={() => <WordStartGameContainer />} />


      <Route component={NotFound} />

      </Switch>
      </div>
    )
  }
}



export default GameContainer
