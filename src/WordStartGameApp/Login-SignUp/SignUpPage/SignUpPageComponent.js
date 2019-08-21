import React from 'react'

const SignUpPageComponent = (props)=>{
  //on submit of this form you make a post request on users DB to add new user
  return(
    <div>
    <h1>
    Signing Up for a Word Start account
    </h1>
    <form onSubmit = {props.handleSubmit}>
      <label htmlFor="newUsername">
      <div>
        UserName:
          <input type="text" id="newUsername"name="username" placeholder="please enter a username" />
          </div>
      </label>
      <label htmlFor="newPassword">
      <div>
        Password:
          <input type="text" id="newPassword" name="password" placeholder="please enter a password" />
          </div>
      </label>
            <input type="submit" value="Create An Account" />
    </form>
    </div>
  )
}
export default SignUpPageComponent
