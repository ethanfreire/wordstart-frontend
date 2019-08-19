import React from 'react'
import WordCardComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/Board/WordCardComponent.js'

class BoardContainer extends React.Component {
  deleteWord = (id) => {
    console.log(id)
  }
render(){
  return(
    <div>
    I am a board container with board cards
    {console.log(this.props.currentUserWords[0].word)}
    {this.props.currentUserWords.map(wordObj => <WordCardComponent wordObj={wordObj} key={wordObj.id} array={this.props.currentUserWords} deleteWord={this.deleteWord} id={wordObj.id}/>)}

    </div>
  )
}

}
export default BoardContainer
// <li>{word.word}</li>
//
// </ul>
// <WordCardComponent currentUserWords={this.props.currentUserWords}/>
