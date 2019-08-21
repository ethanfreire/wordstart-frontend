import React from 'react'
import randomWordOfTheDay from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/RandomWordArray.js'

const UserProfileComponent = (props)=>{
  console.log(props)
  return(
    <div>
    <h1>Word Start</h1>
    <p>Random Word: {randomWordOfTheDay}</p>
   <div>  I am logged in as {props.user.username}</div>
   <button onClick = {props.onClick}> LogOut </button>
    </div>
  )
}
export default UserProfileComponent
