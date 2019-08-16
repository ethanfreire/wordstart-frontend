import React from 'react'
import UserProfileContainer from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import BoardMenuContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/BoardMenuContainer.js"
import BoardContainer from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/Board/BoardContainer.js"


class WordBoardPageContainer extends React.Component {

  



render(){
  console.log(this.props)
  return(
    <div>
    <p>I am a Word Board page</p>
    I am a word board page container, with a userProfilecontainer.

    <UserProfileContainer />
    <BoardMenuContainer />
    <BoardContainer />
    </div>
  )
}

}
export default WordBoardPageContainer
