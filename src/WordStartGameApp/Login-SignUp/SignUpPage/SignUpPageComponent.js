import React from 'react'

const SignUpPageComponent = (props)=>{

  return(
    <div className="centerthis" >
      <h1>
        Signing Up for a Word Start account
      </h1>

      <form class="ui form" onSubmit = {props.handleSubmit}>
        <div class="field">
          <label htmlFor="newUsername">
            UserName:
          </label>
          <input type="text" id="newUsername"name="username" placeholder="please enter a username" />
        </div>

        <div class="field">
          <label htmlFor="newPassword">
            Password:
          </label>
          <input type="text" id="newPassword" name="password" placeholder="please enter a password" />
        </div>
        <button class="ui button" type="submit">
          Create An Account
        </button>
      </form>
    </div>
  )
}
export default SignUpPageComponent
