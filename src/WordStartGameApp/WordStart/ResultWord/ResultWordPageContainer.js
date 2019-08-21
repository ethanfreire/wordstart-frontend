import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultWordComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/ResultWord/ResultWordPage/ResultWordComponent.js'
import {Link}  from "react-router-dom"
import CanvasDraw from "react-canvas-draw";


class ResultWordPageContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      width: 2000

    }
  }
  handleSubmit = () => {
    console.log("lets go to wordboard")
  }
  componentDidMount(){
    //make a fetch/find call to get current active user from all user array and reset current active user to same logged in user to reflect update in words array.
    this.props.updateUserInfo(this.props.currentActiveUser)
  }


render(){
  console.log(this.props.searchWord)
  console.log("I am login in as ",this.props.currentActiveUser)
  return(
    <div>

    <UserProfileContainer />
    <ResultWordComponent searchWord={this.props.searchWord} handleSubmit={this.handleSubmit}/>
    <div>
      <h1>Practice Writing Your Word On The Canvas</h1>
      <div >
      <CanvasDraw ref={canvasDraw => (this.saveableCanvas = canvasDraw)} canvasWidth={this.state.width}/>
  </div>
      <button onClick={() => { this.saveableCanvas.clear(); }}>
        Clear
      </button>
    </div>
    <Link to = "/getword">
      <button > Search Another Word</button>
    </Link>
    <Link to = "/wordboard">
      <button > Go To Word Board</button>
    </Link>
    </div>
  )
}

}
export default ResultWordPageContainer
