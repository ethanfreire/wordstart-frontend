import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import Countdown from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageComponents/Countdown.js"
class LearnPageContainer extends React.Component {

  render(){
    return(
      <div>
      <p>I am a learn game page </p>
      <UserProfileContainer />
      I am a learn game page, with a user profile component
      <Countdown />
      </div>
    )
  }
}
export default LearnPageContainer
