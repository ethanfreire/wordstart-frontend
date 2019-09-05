import React from 'react'
import UserProfileContainer from 'src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultWordComponent from 'src/WordStartGameApp/WordStart/ResultWord/ResultWordPage/ResultWordComponent.js'
import {Link}  from "react-router-dom"
import CanvasDraw from "react-canvas-draw";


class ResultWordPageContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      width: 2000
    }
  }

render(){
  console.log(this.props.searchWord)
  console.log("I am login in as ",this.props.currentActiveUser)
  return(
    <div>
      <UserProfileContainer />
      <ResultWordComponent searchWord={this.props.searchWord}/>
      <p></p>
      <div>
        <h1>Practice Writing Your Word On The Canvas</h1>
        <div className="ui segment addCanvasBorder">
          <CanvasDraw ref={canvasDraw => (this.saveableCanvas = canvasDraw)} canvasWidth={this.state.width}/>
        </div>
        <button className="ui button spacingResultButton" onClick={() => {    this.saveableCanvas.clear(); }}>
        Clear
        </button>
      </div>
      <p></p>
      <div>

        <Link to = "/wordboard">
          <button className="ui button"> Go To Word Board</button>
        </Link>
      </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>
    )
  }
}
export default ResultWordPageContainer
