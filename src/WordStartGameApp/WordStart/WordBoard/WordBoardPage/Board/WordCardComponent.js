import React from 'react'

const WordCardComponent = (props)=>{
  console.log(props)
  return(
    <div>
      <div className="ui centered card">
        <div className="ui card accordion">
          <div className = "title">
            <p>
              <h1>Word: {props.wordObj.word}</h1>
            </p>
            <p>
              <h1>{props.array.indexOf(props.wordObj) + 1 } Out of {props.array.length}
              </h1>
            </p>
            <button className="ui button attached button fixedDeleteButtonSpacing" onClick={(event)=> props.deleteWord(props.id)}>Delete</button>
          </div>
        <div className="ui simple dropdown fixedMoreInfoSpacing">
            <div className="text">More Info</div>
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item">
                  <h3>Definition:{props.wordObj.definition}</h3>
                  <h3>Examples:{props.wordObj.examples}</h3>
                  <h3>Part of Speech:{props.wordObj.part_of_speech}</h3>
                  <h3>Synonym:{props.wordObj.synonym}</h3>
                </div>
              </div>
            </div>
        </div>
      </div>                  
    </div>
  )
}
export default WordCardComponent
