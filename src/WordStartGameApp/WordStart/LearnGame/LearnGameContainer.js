import React from 'react'
import UserProfileContainer from '../UserProfile/UserProfileContainer.js'
import LearnPageContainer from "./LearnGamePage/LearnPageContainer.js"
import LearnResultsPageContainer from "./LearnGameResultsPage/LearnResultsPageContainer.js"
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
