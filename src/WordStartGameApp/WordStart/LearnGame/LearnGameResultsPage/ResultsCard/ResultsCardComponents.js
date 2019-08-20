import React from 'react'

const ResultsCardComponent = (props)=>{
  console.log(props)
  const renderRedOrGreenCard = (correctAns, userAns) => {
    if(correctAns == userAns){
      return {backgroundColor:"green"}
    }else{
      return {backgroundColor:"red"}
    }
  }

  return(
    <div>
    <div style={renderRedOrGreenCard(props.wordObj.word,props.finalAnsArray[props.array.indexOf(props.wordObj)] )}>
      <h1>{props.array.indexOf(props.wordObj) + 1 } Word Out of {props.array.length} </h1>
      <h2>Correct Ans:{props.wordObj.word}</h2>
      <h2>
      Your Answer:{props.finalAnsArray[props.array.indexOf(props.wordObj)]}
      </h2>

    </div>
    </div>
  )
}
export default ResultsCardComponent
