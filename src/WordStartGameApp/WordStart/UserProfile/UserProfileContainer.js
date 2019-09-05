import React from 'react'
import UserProfileComponent from "src/WordStartGameApp/WordStart/UserProfile/UserProfileComponent.js"

class UserProfileContainer extends React.Component {
  constructor(){
    super()
    this.state={
    loggedIn:{}
      }
  }

  setLoggedIn = ()=> {
      console.log(this.props.currentActiveUser)
      this.setState({
        loggedIn: this.props.currentActiveUser
      })
  }

  onClick = () => {
      window.location.href = 'http://localhost:3000/login';
  }

  componentDidMount(){
      this.setState({
        loggedIn: this.props.currentActiveUser
      })
  }


  render(){
    return(
      <div>
        {this.props.currentActiveUser != null ?
          <UserProfileComponent  user = {this.props.currentActiveUser}
          onClick = {this.onClick}/>
          : null }
      </div>
    )
  }
}
export default UserProfileContainer
