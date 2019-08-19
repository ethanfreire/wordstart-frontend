import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import Countdown from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageComponents/Countdown.js"
import GameSlideComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageComponents/GameSlideComponent.js"

class LearnPageContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      ansArray : []
    }
  }


  setAnsArray = (ans) => {
    this.setState({
      ansArray: [...this.state.ansArray, ans]
    })

    //on submit of this form add userAnsArray, make word dissapper, at end of page have submit to go to result(add event listern that all forms must be submitted) or let timer go.

    // on going to result do: do ans logic here and pass that to game container and have that pass down to result

  }

  render(){
    console.log(this.props)
    return(
      <div>
      <p>I am a learn game page </p>
      <UserProfileContainer />
      <Countdown />
      I am a learn game page, with a user profile component
      <h1>    Given The Following Info
</h1>
{this.props.currentActiveUser.words.map(wordObj => <GameSlideComponent wordObj={wordObj} key={wordObj.id} array={this.props.currentActiveUser.words}  id={wordObj.id} setAnsArray={this.setAnsArray}/>)}
      </div>
    )
  }
}
export default LearnPageContainer
