import React from "react"
import LoginPageComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/LoginPage/LoginPageComponent.js"
import SignUpPageComponent from "/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/Login-SignUp/SignUpPage/SignUpPageComponent.js"
import { withRouter } from 'react-router-dom'

class LoginSignUpContainer extends React.Component {
constructor(){
  super()
  this.state = {
    allUsers: [],
    allUsername: []
  }
}

componentDidMount(){
//fetch all user from database and pass to GameContainer
  fetch("https://wordstart-backend.herokuapp.com/users/")
  .then(response => response.json())
  .then(dataObject => this.setAllUsers(dataObject))
}

setAllUsers = (dataObject) => {
  this.setState({
    allUsers: dataObject
  })
  this.getUsername(this.state.allUsers)
}

getUsername = (data) => {
  let username = data.map(entry => entry.username)
  this.setState({
    allUsername: username
  })
}

handleLogin = (event) => {
  event.preventDefault()

  console.log("trying to login in as", event.target)
  let loginUser = {
    username: document.querySelector("#currentUsername").value,
    password: document.querySelector("#currentPassword").value
  }

  if (event.target.querySelector("#currentUsername").value === "" || event.target.querySelector("#currentPassword").value === "" ){
    alert("do not leave password or username blank")
  }
  else if(!this.state.allUsername.includes(loginUser.username
    )){
  alert("You are not a user, please sign up for an account.")
      }
  else if(this.state.allUsername.includes(loginUser.username
    )) {
      this.findLoginUser(loginUser)
      this.props.history.push("/getword")
  }
}

findLoginUser =(loginUser) =>{
  console.log("find me ", loginUser)
  let foundUser = this.state.allUsers.find( profile => profile.username === loginUser.username)
  this.props.setActiveUser(foundUser)
}

//make a fecth POST call to add user to DB
handleSubmit = (event) => {
  event.preventDefault()
  console.log("trying to create a user with", event.target)

  if (event.target.querySelector("#newUsername").value === "" || event.target.querySelector("#newPassword").value === "" ){
    alert("do not leave password or username blank")
  }
  else if (this.state.allUsername.includes(event.target.querySelector("#newUsername").value))
  {
    alert("Sorry this username is already taken. Please enter a new one.")
    document.querySelector("#newUsername").value = ""
  }
  else {

   let newUserData = {
    username: event.target.querySelector("#newUsername").value,
    password: event.target.querySelector("#newPassword").value
  }

  console.log(newUserData, "this is my data")
  fetch("https://wordstart-backend.herokuapp.com/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(data => {
      this.getUsername(this.state.allUsers)
      window.location = "http://localhost:3000/login";
    })
  }
}

  render(){
    return(
      <div>
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
