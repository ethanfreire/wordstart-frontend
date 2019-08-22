import React from 'react'
import {Link} from 'react-router-dom'


const LoginPageComponent = (props)=>{
  //on click of login make a get request and check(auth) if user exist and if yes continue if no alert user that username or password is incorrect, and if yes fill in Gamecontiner state the current user state info
  return(
    <div className="centerthis">

    <h1 className="ui header" >Welcome To Word Start

        <div className="sub header">
          <h3>Start Learning New Words Today!</h3>
        </div>
        </h1>
              <h4 className="ui header">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
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

// <form onSubmit = {props.handleLogin}>
//   <div>
//     <label htmlFor="currentUsername">
//       <div>
//         UserName:
//         <input type="text" id="currentUsername" name="username" placeholder="please enter a username" />
//         </div>
//     </label>
//     <label htmlFor="currentPassword">
//       <div>
//       Password:
//       <input type="password" id="currentPassword" name="password" placeholder="please enter a password" />
//       </div>
//     </label>
//      <input type="submit" value="Log In" />
//   </div>
