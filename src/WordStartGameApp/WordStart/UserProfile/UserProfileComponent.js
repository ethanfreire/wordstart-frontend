import React from 'react'
import randomWordOfTheDay from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/RandomWordArray.js'

const UserProfileComponent = (props)=>{
  console.log(props)
  return(
    <div>

    <div className="ui four item menu">
    <div className="header item">
    <h1>Word Start</h1>
    </div>

    <div className="header item">
    Random Word: {randomWordOfTheDay}
    </div>
    <div className="header item">

    Hi, {props.user.username}
   </div>
   <div className="header item">

   <button className="ui button" onClick = {props.onClick}> LogOut </button>
   </div>
   </div>

    </div>
  )
}
export default UserProfileComponent
