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
        <h1>
          {props.array.indexOf(props.wordObj) + 1 } Out of {props.array.length}
          </h1>
          </p>

        </div>
          <div className="text">More Info</div>
              <i className="dropdown icon"></i>
            <div className="content">
              <div >
              <p className="transition hidden">
                <h2>Definition:{props.wordObj.definition}</h2>
                <h3>Examples:{props.wordObj.examples}</h3>
                <h4>Part of Speech:{props.wordObj.part_of_speech}</h4>
                <h5>Synonym:{props.wordObj.synonym}</h5>
                </p>
                </div>
              </div>
            <button className="ui button attached button" onClick={(event)=> props.deleteWord(props.id)}>Delete</button>

    </div>
    </div>
 </div>
  )
}
export default WordCardComponent
// {props.currentUserWords != null ? <div> {props.currentUserWords.map(entry => {<h2> entry.word</h2> })} </div> : null}


// <div className="ui card accordion">
//   <div className = "title">
//     <a className = "title">Word: {props.wordObj.word}</a>
//
//     <div className="description">
//       {props.array.indexOf(props.wordObj) + 1 } Out of {props.array.length}
//     </div>
//   </div>
//
//       <div className="ui accordion">
//         <div className="text">More Info</div>
//           <i className="dropdown icon"></i>
//         <div className="content">
//           <div className="transition hidden">
//             <h2>Definition:{props.wordObj.definition}</h2>
//             <h3>Examples:{props.wordObj.examples}</h3>
//             <h4>Part of Speech:{props.wordObj.part_of_speech}</h4>
//             <h5>Synonym:{props.wordObj.synonym}</h5>
//             </div>
//
//       </div>
//         <button className="ui button attached button" onClick={(event)=> props.deleteWord(props.id)}>Delete</button>
//   </div>
// </div>
