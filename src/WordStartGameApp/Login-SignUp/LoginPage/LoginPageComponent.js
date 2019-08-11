import React from 'react'

const LoginPageComponent = ()=>{
  //on click of login make a get request and check(auth) if user exist and if yes continue if no alert user that username or password is incorrect, and if yes fill in Gamecontiner state the current user state info
  return(
    <div>
      You have hit the Login page form
      <h1>
        Welcome To WordStart
      </h1>
        <h3>
          Start Learning New Words Today!
        </h3>
              <h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
              </p>
              </h4>
    <form>
      <div>
      <p>Please login in below</p>
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
          <input type="submit" value="Log In" />
      </div>
    <div>
      <div>
      <p>
        If you don't have a WordStart account please click the button below.
        </p>
      </div>
        <input type="submit" value="Create An Account" />
    </div>
    </form>
    </div>
  )
}
export default LoginPageComponent
