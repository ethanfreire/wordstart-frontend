import React from 'react'

const FinalResultsComponent = (props)=>{
  return(
    <div>
      <div>
        <h1>Final Results</h1>
        <h2>  {props.wordsCorrect.length} out of {props.array.length} correct</h2>
        <h2>   {props.wordsCorrect.length / props.array.length * 100} % correct</h2>
      </div>
    </div>
  )
}
export default FinalResultsComponent
