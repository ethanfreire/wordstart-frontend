import React from 'react'

const GetWordPageComponent = (props)=>{
//submit button need a callback function back to container to handel word search logic
  return(
    <div>

    <form className="ui form" onSubmit = {props.handleSubmit}>
    <div className="field">
      <label htmlFor="SearchWord">Search a new Word: </label>
      <input type="text" id="SearchWord" name="word" placeholder="please enter a word" />
      </div>
      <button class="ui button" type="submit">
      Submit
      </button>
    </form>

    </div>
  )
}
export default GetWordPageComponent
