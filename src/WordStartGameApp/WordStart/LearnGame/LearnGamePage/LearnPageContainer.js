import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import Countdown from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageComponents/Countdown.js"
import GameSlideComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageComponents/GameSlideComponent.js"
import LearnResultsPageContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/LearnResultsPageContainer.js"
import { withRouter } from 'react-router-dom'

class LearnPageContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      ansArray : [],
      copyArray: []
    }
  }


  setAnsArray = (ans, id) => {

    this.setState({
      ansArray: [...this.state.ansArray, ans],

    })
    let ansObjId = id

    let ansObjData = this.props.copyArrayGame.find(word => word.id === ansObjId)
    let indexAnsObj = this.props.copyArrayGame.indexOf(ansObjData)
    this.props.copyArrayGame.splice(indexAnsObj, 1)
  }

  iDontKnowOption = (id) => {

    this.setState({
      ansArray: [...this.state.ansArray, "I Don't Know"],
    })
    let ansObjId = id

    let ansObjData = this.props.copyArrayGame.find(word => word.id === ansObjId)
    let indexAnsObj = this.props.copyArrayGame.indexOf(ansObjData)
    this.props.copyArrayGame.splice(indexAnsObj, 1)

  }

    componentDidMount(){

        this.setState({
          copyArray: this.props.copyArrayGame
        })
    }
    //on submit of this form add userAnsArray, make word dissapper, at end of page have submit to go to result(add event listern that all forms must be submitted) or let timer go.

    // on going to result do: do ans logic here and pass that to game container and have that pass down to result
    onClick = (data) =>{
      this.props.setFinalAnsArray(this.state.ansArray)
      this.props.history.push( "/learnresult")
    }


    timerAction= () => {
      this.props.setFinalAnsArray(this.state.ansArray)

    }
  render(){
    console.log(this.props)
    return(
      <div>
      <p>I am a learn game page </p>
      <UserProfileContainer />
      <Countdown timerAction = {this.timerAction}/>
      I am a learn game page, with a user profile component

      <h1>    Given The Following Info
</h1>
{this.props.copyArrayGame.map(wordObj => <GameSlideComponent wordObj={wordObj} key={wordObj.id} array={this.props.copyArrayGame}  id={wordObj.id} setAnsArray={this.setAnsArray} iDontKnowOption={this.iDontKnowOption}/>)}
<button onClick = {this.onClick}>End Game</button>
      </div>
    )
  }
}
export default withRouter(LearnPageContainer)
