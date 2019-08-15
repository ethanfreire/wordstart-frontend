import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultWordComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPage/ResultWordComponent.js'
import {withRouter , Link}  from "react-router-dom"

class ResultWordPageContainer extends React.Component {
  constructor(){
    super()
    this.state ={

    }

  }
  handleSubmit = () => {
    console.log("lets go to wordboard")
  }

render(){
  console.log(this.props.searchWord)
  return(
    <div>
    <p>I am a results page</p>
    <UserProfileContainer />
    I am a results word page container, with a userProfilecontainer
    <ResultWordComponent searchWord = {this.props.searchWord} handleSubmit={this.handleSubmit}/>




    <Link to = "/getword">
<button > go back to get word</button>
</Link>
    </div>
  )
}

}
export default ResultWordPageContainer
