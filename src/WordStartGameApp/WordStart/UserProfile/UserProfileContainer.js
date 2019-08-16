import React from 'react'
import UserProfileComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/UserProfile/UserProfileComponent.js"

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
componentDidMount(){
  this.setState({
    loggedIn: this.props.currentActiveUser
  })
}


  render(){
    return(
      <div>
      {this.props.currentActiveUser != null
 ?
      <UserProfileComponent  user = {this.props.currentActiveUser} />
: null }

      </div>
    )
  }
}
export default UserProfileContainer


//       {!!document.querySelector("#newUsername") == true
//  ?       <UserProfileComponent loggedIn = {this.setLoggedIn()}/> :
//       null
// }
