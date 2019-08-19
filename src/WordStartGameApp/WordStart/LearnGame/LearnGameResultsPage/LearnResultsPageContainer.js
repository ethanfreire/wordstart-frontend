import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'


class LearnResultsPageContainer extends React.Component {

  render(){
    console.log(this.props)
    return(
      <div>
      <p>I am a learn results page</p>
      <UserProfileContainer />
      I am a learn results page, with a user profile component

      </div>
    )
  }
}
export default LearnResultsPageContainer
