import React from 'react'
import LearnButtonComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/LearnButtonComponent.js'
import SearchRandomWordComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/SearchRandomWordComponent.js'
import AddToBoardComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/AddToBoardButtonComponent.js'

class BoardMenuContainer extends React.Component {
render(){
  return(
    <div>
    I am a board menu container
    <LearnButtonComponent />
    <SearchRandomWordComponent />
    <AddToBoardComponent />
    </div>
  )
}

}
export default BoardMenuContainer
