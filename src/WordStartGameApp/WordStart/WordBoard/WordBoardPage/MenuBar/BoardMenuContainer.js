import React from 'react'
import LearnButtonComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/LearnButtonComponent.js'
import SearchRandomWordComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/SearchRandomWordComponent.js'
import AddToBoardComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/MenuBar/AddToBoardButtonComponent.js'
import { withRouter,Link } from 'react-router-dom'

class BoardMenuContainer extends React.Component {

//maybe get rid of this????
  // <LearnButtonComponent />
  // <SearchRandomWordComponent />
  // <AddToBoardComponent />


render(){
  return(
    <div>
    I am a board menu container
    <div>
    <Link to = "/learngame">
      <button > Learn Game</button>
    </Link>
    <Link to = "/getword">
      <button > Search New Word</button>
    </Link>

    </div>

    </div>
  )
}

}
export default withRouter(BoardMenuContainer)
