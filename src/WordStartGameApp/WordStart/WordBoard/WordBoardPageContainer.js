import React from 'react'
import UserProfileContainer from '../UserProfile/UserProfileContainer.js'
import BoardMenuContainer from "./WordBoardPage/MenuBar/BoardMenuContainer.js"
import BoardContainer from "./WordBoardPage/Board/BoardContainer.js"

class WordBoardPageContainer extends React.Component {

  componentDidMount(){
    this.props.setCopyArrayWordBoard(this.props.currentUserWords)

  }

  render(){
    console.log(this.props)
    console.log(this.props.currentActiveUser)
    return(
      <div>
        <UserProfileContainer />
        <BoardMenuContainer />
        <h1>Welcome To Your WordBoard {this.props.currentActiveUser.username}</h1>
        <h1>Here are your searched words</h1>
        <BoardContainer currentUserWords={this.props.currentUserWords}
        deleteUserWord = {this.props.deleteUserWord}
        currentActiveUser={this.props.currentActiveUser}/>
      </div>
    )
  }
}
export default WordBoardPageContainer
