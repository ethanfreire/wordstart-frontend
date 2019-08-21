import React from 'react'
import { withRouter,Link } from 'react-router-dom'

class BoardMenuContainer extends React.Component {

//maybe get rid of this????
  // <LearnButtonComponent />
  // <SearchRandomWordComponent />
  // <AddToBoardComponent />


render(){
  return(
    <div>
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
