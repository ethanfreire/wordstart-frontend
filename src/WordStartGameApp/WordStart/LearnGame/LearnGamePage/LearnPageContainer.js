import React from 'react'
import UserProfileContainer from '../../UserProfile/UserProfileContainer.js'
import Countdown from "./LearnPageComponents/Countdown.js"
import GameSlideComponent from "./LearnPageComponents/GameSlideComponent.js"
import { withRouter } from 'react-router-dom'

class LearnPageContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      ansArray : [],
      copyArray: [],
      currentSlideIndex: 0
    }
  }

  setAnsArray = (ans, id) => {
    this.setState({
      ansArray: [...this.state.ansArray, ans],
    })
    let ansObjId = id
    let ansObjData = this.props.copyArrayGame.find(word => word.id === ansObjId)
    let indexAnsObj = this.props.copyArrayGame.indexOf(ansObjData)
    document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(4) > div > div > div > div > form > label > input[type=text]").value = ""
    this.props.copyArrayGame.splice(indexAnsObj, 1)
  }

  iDontKnowOption = (id) => {
    this.setState({
      ansArray: [...this.state.ansArray, "I Don't Know"],
    })
    let ansObjId = id
    let ansObjData = this.props.copyArrayGame.find(word => word.id === ansObjId)
    let indexAnsObj = this.props.copyArrayGame.indexOf(ansObjData)
    document.querySelector("#root > div > div > div:nth-child(2) > div:nth-child(4) > div > div > div > div > form > label > input[type=text]").value = ""
    this.props.copyArrayGame.splice(indexAnsObj, 1)
  }

    componentDidMount(){
        this.setState({
          copyArray: this.props.copyArrayGame
        })
    }

    onClick = (data) =>{
      this.props.setFinalAnsArray(this.state.ansArray)
      this.props.history.push( "/learnresult")
    }

    timerAction= () => {
      this.props.setFinalAnsArray(this.state.ansArray)
    }

  render(){
    return(
      <div>
        <UserProfileContainer />
        <Countdown timerAction = {this.timerAction}/>
        <h1> Given The Following Info </h1>
        {this.props.copyArrayGame.length > 0 ? (
          this.props.copyArrayGame[this.state.currentSlideIndex].id ? (
            <GameSlideComponent   wordObj={this.props.copyArrayGame[this.state.currentSlideIndex]} array={this.props.copyArrayGame}  id={this.props.copyArrayGame[this.state.currentSlideIndex].id} setAnsArray={this.setAnsArray} iDontKnowOption={this.iDontKnowOption}/>
            ) : null
          ) :null
        }
        <button className="ui button" onClick = {this.onClick}>End Game</button>
      </div>
    )
  }
}
export default withRouter(LearnPageContainer)
