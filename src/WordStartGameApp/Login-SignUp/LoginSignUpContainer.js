import React from "react"
import LoginPageComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginPage/LoginPageComponent.js"
import SignUpPageComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/SignUpPage/SignUpPageComponent.js"
import { withRouter } from 'react-router-dom'


class LoginSignUpContainer extends React.Component {
  //maybe nno needed,I need to get login in user info
constructor(){
  super()
  this.state = {
    isLogedIn: false,
    currentUser: {}
  }
}

handleLogin(event){
  event.preventDefault()
  console.log("trying to login in as", event.target)
  let loginUser = {
    username: document.querySelector("#currentUsername").value,
    password: document.querySelector("#currentPassword").value
  }
  console.log(loginUser)
}


//handle submit make a fecth POST call to add user to DB
handleSubmit = (event) => {
  event.preventDefault()
  console.log("trying to create a user with", event.target)

  if (event.target.querySelector("#newUsername").value == "" || event.target.querySelector("#newPassword").value == "" ){
    alert("do not leave password or username blank")
  }

  else {
   let newUserData = {
    username: event.target.querySelector("#newUsername").value,
    password: event.target.querySelector("#newPassword").value
    }

  console.log(newUserData, "this is my data")
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newUserData)
  })
  .then(response => response.json())
  .then(data => {
    this.props.history.push("/login")
  })
}
}



  render(){
    return(
      <div>
      <p>I am a loginSignUp page</p>

      You hit me I am a LoginSignupcontainer
     { this.props.location.pathname === "/login" ?
     <LoginPageComponent handleLogin={this.handleLogin}/>
     :      null
      }

      { this.props.location.pathname === "/signup" ?
      <SignUpPageComponent handleSubmit={this.handleSubmit}/>
      :  null
       }


      </div>
    )
  }
}
export default withRouter(LoginSignUpContainer)
