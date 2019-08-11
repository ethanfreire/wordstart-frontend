import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultWordComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPage/ResultWordComponent.js'

class ResultWordPageContainer extends React.Component {
render(){
  return(
    <div>
    <p>I am a results page</p>
    <UserProfileContainer />
    I am a results word page container, with a userProfilecontainer
    <ResultWordComponent />
    </div>
  )
}

}
export default ResultWordPageContainer
