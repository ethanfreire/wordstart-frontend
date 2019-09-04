import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import BoardMenuContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/BoardMenuContainer.js"
import BoardContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/Board/BoardContainer.js"

class WordBoardPageContainer extends React.Component {
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
