import React from 'react'

const ResultWordComponent = (props)=>{
  return(
    <div>
    <p>The word you searched for is {props.searchWord.word}, Here are the results</p>
    <h1> {props.searchWord.word} </h1>
    <p>Part of Speech: {props.searchWord.part_of_speech}</p>
    <p>Synonym: {props.searchWord.synonym}</p>
    <p>Definition: {props.searchWord.definition}</p>
    <p>Example: {props.searchWord.examples}</p>
    </div>
  )
}
export default ResultWordComponent
