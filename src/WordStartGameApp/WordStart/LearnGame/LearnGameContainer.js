import React from 'react'
import UserProfileContainer from 'src/WordStartGameApp/WordStart/UserProfile/UserProfileContainer.js'
import LearnPageContainer from "src/WordStartGameApp/WordStart/LearnGame/LearnGamePage/LearnPageContainer.js"
import LearnResultsPageContainer from "src/WordStartGameApp/WordStart/LearnGame/LearnGameResultsPage/LearnResultsPageContainer.js"
import { withRouter } from 'react-router-dom'

class LearnGameContainer extends React.Component {
  render(){
    return(
      <div>
        <UserProfileContainer />

        { this.props.location.pathname === "/learngame" ?
        <LearnPageContainer />
        : null
        }

        { this.props.location.pathname === "/learnresult" ?
        <LearnResultsPageContainer />
        : null
        }

      </div>
    )
  }
}
export default withRouter(LearnGameContainer)
