import React from 'react'
import { withRouter,Link } from 'react-router-dom'

class BoardMenuContainer extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Link to = "/learngame">
            <button className="ui button"> Learn Game</button>
          </Link>
          <Link to = "/getword">
            <button className="ui button"> Search New Word</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default withRouter(BoardMenuContainer)
