import React from 'react'
import {Link} from 'react-router-dom'

const LoginPageComponent = (props)=>{

  return(
    <div className="centerthis">

      <h1 className="ui header" >Welcome To Word Start

        <div className="sub header">
          <h3>Start Learning New Words Today!</h3>
        </div>
      </h1>

      <h4 className="ui header">
        <p>
              WordStart is a Vocabulary Builder App design for people of any age to learn new words. Inspired by the Princeton review WordSmart book series WordStart help people expand their vocabulary by incorporating a mixture of visual and tactile learning to strengthen the association of new words. Also it includes a WordBoard so user can see all the words they searched for. In addition their is the learn game option a mini game in which users have 10 minutes to go through all the words on their word board and guess the word given the words definition, synonyms, examples, and part of speech.
        </p>
      </h4>

      <h1 className="ui huge header">Please login in below</h1>
        <form className="ui form" onSubmit = {props.handleLogin}>
          <div className="field">
            <label htmlFor="currentUsername">
            UserName:
            </label>
            <input type="text" id="currentUsername" name="username" placeholder="please enter a username" />
          </div>
          <div className="field">
            <label htmlFor="currentPassword">
              Password:
            </label>
            <input type="password" id="currentPassword" name="password" placeholder="please enter a password" />
          </div>
          <button className="ui button" type="submit">
            Log In
          </button>
        </form>
        
         <p></p>

      <div>
        <div>
          <h1>
            If you don't have a WordStart account please click the button below.
          </h1>
        </div>
        <p></p>
        <div>
          <Link to = {`/signup`}>
            <button className ="ui button" type="submit">
              Create An Account
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}
export default LoginPageComponent
