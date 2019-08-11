import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import LearnPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageContainer.js"
import LearnResultsPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/LearnResultsPageContainer.js"

class LearnGameContainer extends React.Component {

  render(){
    return(
      <div>
      <p>I am a learn  container</p>
      <UserProfileContainer />
      I am a learn container , with a user profile component
      <LearnPageContainer />
      <LearnResultsPageContainer />
      </div>
    )
  }
}
export default LearnGameContainer
