import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultsCardComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/ResultsCard/ResultsCardComponents.js"
import FinalResultsComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/FinalResults/FinalResultsComponent.js"
import {withRouter , Link}  from "react-router-dom"




class LearnResultsPageContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      wordsCorrect: []
    }
  }

  componentDidMount() {
    this.setUserAns(this.props.currentUserWords, this.props.finalAnsArray)
  }


  onClickPlayAgain = ()=> {
    this.props.resetLearnGame()
    this.props.history.push("/learngame")
  }

onClickGoBackToBoard = () => {
  this.props.resetLearnGame()
  this.props.history.push("/wordboard")

}
  finalResults = () => {
    console.log("the final result is # correct")
  }

  setUserAns = (ans, userAns) => {

      let counterCorrect = userAns.map((word, index) => {
        if (word.toLowerCase() === ans[index].word) {
          return word
        }
      })
      let finalUserCorrectAns = counterCorrect.filter(word => word != undefined)

      this.setState({
        wordsCorrect: finalUserCorrectAns
      })
  }

  render(){
    console.log(this.props)
    return(
      <div>

      <p>I am a learn results page</p>
      <UserProfileContainer />
      I am a learn results page, with a user profile component

      <FinalResultsComponent array={this.props.currentUserWords} wordsCorrect={this.state.wordsCorrect}
      />
      <button onClick = {this.onClickGoBackToBoard} > Go Back to Board?</button>
      <button onClick = {this.onClickPlayAgain} > Play Again?</button>

      {this.props.currentUserWords.map(wordObj => <ResultsCardComponent wordObj={wordObj} key={wordObj.id}
        id={wordObj.id}
        array={this.props.currentUserWords}
        finalAnsArray = {this.props.finalAnsArray}

        />)}



      </div>
    )
  }
}
export default withRouter(LearnResultsPageContainer)



///ADD LOGIC TO GET ANS CORRECT %
//before mapping get the results then have an if statement where if your word is not the same as correct ans then render red or green container border

//send the number of correct ans to finalresult





// old result code
// <div>
//
// <p>I am a learn results page</p>
// <UserProfileContainer />
// I am a learn results page, with a user profile component
//
// <FinalResultsComponent array={this.props.currentUserWords} wordsCorrect={this.state.wordsCorrect}
// />
// <button onClick = {this.onClickGoBackToBoard} > Go Back to Board?</button>
// <button onClick = {this.onClickPlayAgain} > Play Again?</button>
//
// {this.props.currentActiveUser.words.map(wordObj => <ResultsCardComponent wordObj={wordObj} key={wordObj.id}
//   id={wordObj.id}
//   array={this.props.currentActiveUser.words}
//   finalAnsArray = {this.props.finalAnsArray}
//
//   />)}
//
//
//
// </div>
