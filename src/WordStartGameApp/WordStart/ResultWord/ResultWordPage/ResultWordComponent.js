import React from 'react'

const ResultWordComponent = (props)=>{
  return(
    <div>
    You have hit result page component
    <form onSubmit={props.handleSubmit}>
        <label>
          You Searched for Word:{props.searchWord.word}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default ResultWordComponent
