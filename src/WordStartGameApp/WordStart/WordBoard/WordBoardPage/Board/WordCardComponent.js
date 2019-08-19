import React from 'react'

const WordCardComponent = (props)=>{
  console.log(props)
  return(
    <div>
    <div>
    <h1>Word:{props.wordObj.word}</h1>
    <h1>{props.array.indexOf(props.wordObj) + 1 } Word Out of {props.array.length} </h1>
    <h2>Definition:{props.wordObj.definition}</h2>
    <h3>Examples:{props.wordObj.examples}</h3>
    <h4>Part of Speech:{props.wordObj.part_of_speech}</h4>
    <h5>Synonym:{props.wordObj.synonym}</h5>
    <button onClick={(event)=> props.deleteWord(props.id)}>Delete</button>
    </div>
 </div>
  )
}
export default WordCardComponent
// {props.currentUserWords != null ? <div> {props.currentUserWords.map(entry => {<h2> entry.word</h2> })} </div> : null}
