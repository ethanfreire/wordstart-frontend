import React from 'react'

const ResultsCardComponent = (props)=>{
  console.log(props)
  const renderRedOrGreenCard = (correctAns, userAns) => {
    if (userAns === "" || userAns === undefined){
      return {backgroundColor:"white"}
    }else if(correctAns === userAns.toLowerCase() ){
      return {backgroundColor:"green"}
    }else{
      return {backgroundColor:"red"}
    }
  }

  return(
    <div>

    <div className="ui centered card">
    <div style={renderRedOrGreenCard(props.wordObj.word, props.finalAnsArray[props.array.indexOf(props.wordObj)] )}>
      <h1>{props.array.indexOf(props.wordObj) + 1 } Word Out of {props.array.length} </h1>
      <h2>Correct Ans:{props.wordObj.word}</h2>
      <h2>
      Your Answer:{props.finalAnsArray[props.array.indexOf(props.wordObj)]}
      </h2>
    </div>
    </div>

    </div>
  )
}
export default ResultsCardComponent
