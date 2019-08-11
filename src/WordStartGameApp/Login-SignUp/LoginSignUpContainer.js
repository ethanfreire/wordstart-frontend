import React from "react"
import LoginPageComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginPage/LoginPageComponent.js"
import SignUpPageComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/SignUpPage/SignUpPageComponent.js"

class LoginSignUpContainer extends React.Component {
  //maybe nno needed,I need to get login in user info
constructor(){
  super()
  this.state = {
    isLogedIn: false,
  }
}
// <SignUpPageComponent />
// <LoginPageComponent />


  render(){
    return(
      <div>
      <p>I am a loginSignUp page</p>

      You hit me I am a LoginSignupcontainer



      </div>
    )
  }
}
export default LoginSignUpContainer
