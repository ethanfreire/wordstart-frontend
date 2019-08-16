import React from 'react'


const UserProfileComponent = (props)=>{
  console.log(props)
  return(
    <div>
   <div>  I am logged in as {props.user.username}</div>
    </div>
  )
}
export default UserProfileComponent
