import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import ResultsCardComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/ResultsCard/ResultsCardComponents.js"
import FinalResultsComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/FinalResults/FinalResultsComponent.js"
import {withRouter}  from "react-router-dom"

class LearnResultsPageContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      wordsCorrect: []
    }
  }

  componentDidMount() {
    this.setUserAns(this.props.currentActiveUser.words, this.props.finalAnsArray)
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
      let finalUserCorrectAns = counterCorrect.filter(word => word !== undefined )
        this.setState({
          wordsCorrect: finalUserCorrectAns
      })
  }

  render(){
    return(
      <div>
        <UserProfileContainer />
        <FinalResultsComponent array={this.props.currentUserWords} wordsCorrect={this.state.wordsCorrect}
        />
        <p></p>
        <button className="ui button" onClick = {this.onClickGoBackToBoard} > Go Back to Board?</button>
        <button className="ui button" onClick = {this.onClickPlayAgain} > Play Again?</button>
        <p></p>
        {this.props.currentUserWords.map(wordObj => <ResultsCardComponent      wordObj={wordObj} key={wordObj.id}
          id={wordObj.id}
          array={this.props.currentUserWords}
          finalAnsArray = {this.props.finalAnsArray}
        />)}
      </div>
    )
  }
}
export default withRouter(LearnResultsPageContainer)
