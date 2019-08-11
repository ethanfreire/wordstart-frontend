// import Login from "/Users/ethanfreire/Desktop/wordstart-frontend/src/wordStartGame/login"
import React from 'react'
import randomWordOfTheDay from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/RandomWordArray.js'
import LoginSignUpContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginSignUpContainer.js"
import WordStartGameContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordStartGameContainer.js"

class GameContainer extends React.Component {
  constructor() {
    super()
    //keep track of current user
    this.state = {
      currentActiveUser: {}
    }
  }

  // <LoginSignUpContainer />


  render() {
    return (
      <div> I am a Game Container
      and a randomwords array:
      <p>{randomWordOfTheDay}</p>
      <WordStartGameContainer />

      </div>
    )
  }
}

export default GameContainer
