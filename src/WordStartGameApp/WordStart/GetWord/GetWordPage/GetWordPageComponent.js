import React from 'react'

const GetWordPageComponent = (props)=>{
//submit button need a callback function back to container to handel word search logic
  return(
    <div>

    <form onSubmit = {props.handleSubmit}>
      <label htmlFor="SearchWord">Search a new Word: </label>
      <input type="text" id="SearchWord" name="word" placeholder="please enter a word" />
      <input type="submit" value="Submit" />
    </form>

    </div>
  )
}
export default GetWordPageComponent
