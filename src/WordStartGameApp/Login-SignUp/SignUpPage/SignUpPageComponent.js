import React from 'react'

const SignUpPageComponent = ()=>{
  //on submit of this form you make a post request on users DB to add new user
  return(
    <div>
    You have hit the sign up page form
    <h1>
    Signing Up for a Word Start account
    </h1>
    <form>
      <label>
      <div>
        UserName:
          <input type="text" name="username" placeholder="please enter a username" />
          </div>
      </label>
      <label>
      <div>
        Password:
          <input type="text" name="password" placeholder="please enter a password" />
          </div>
      </label>
          <input type="submit" value="Create An Account" />
    </form>
    </div>
  )
}
export default SignUpPageComponent
