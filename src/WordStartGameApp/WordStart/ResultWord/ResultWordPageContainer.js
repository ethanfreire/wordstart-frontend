import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultWordComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPage/ResultWordComponent.js'
import {withRouter , Link}  from "react-router-dom"
import CanvasDraw from "react-canvas-draw";


class ResultWordPageContainer extends React.Component {

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
    <ResultWordComponent searchWord={this.props.searchWord} handleSubmit={this.handleSubmit}/>
    <div>
      <p>Practice Writing Your Word On The Canvas</p>
      <CanvasDraw ref={canvasDraw => (this.saveableCanvas = canvasDraw)} />
      <button onClick={() => { this.saveableCanvas.clear(); }}>
        Clear
      </button>
    </div>
    <Link to = "/getword">
      <button > Search Another Word</button>
    </Link>
    <Link to = "/wordboard">
      <button > Add Word To Word Board</button>
    </Link>
    </div>
  )
}

}
export default ResultWordPageContainer
