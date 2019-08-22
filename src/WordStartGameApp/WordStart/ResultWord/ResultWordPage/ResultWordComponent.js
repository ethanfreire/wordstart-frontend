import React from 'react'

const ResultWordComponent = (props)=>{
  return(
    <div>
    <p></p>
    <h1 className="ui header">The word you searched for is {props.searchWord.word}, Here are the results</h1>
    <div className="ui huge header"> {props.searchWord.word} </div>
    <div className="ui medium header"> Part of Speech: {props.searchWord.part_of_speech}</div>
    <div className="ui medium header"> Synonym: {props.searchWord.synonym}</div>
    <div className="ui medium header"> Definition: {props.searchWord.definition}</div>
    <div className="ui medium header"> Example: {props.searchWord.examples}</div>
    </div>
  )
}
export default ResultWordComponent
