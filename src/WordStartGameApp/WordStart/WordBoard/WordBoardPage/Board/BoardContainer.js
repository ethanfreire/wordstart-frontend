import React from 'react'
import WordCardComponent from '/Users/ethanfreire/Desktop/wordstart-frontend/src/WordStartGameApp/WordStart/WordBoard/WordBoardPage/Board/WordCardComponent.js'

class BoardContainer extends React.Component {
  deleteWord = (id) => {
    console.log(id)
    this.props.deleteUserWord(id)
  }
render(){
  return(
    <div>
    I am a board container with board cards
    {console.log(this.props.currentUserWords[0])}
    {this.props.currentActiveUser.words.map(wordObj => <WordCardComponent wordObj={wordObj} key={wordObj.id} array={this.props.currentActiveUser.words} deleteWord={this.deleteWord} id={wordObj.id}/>)}

    </div>
  )
}

}
export default BoardContainer
// <li>{word.word}</li>
//
// </ul>
// <WordCardComponent currentUserWords={this.props.currentUserWords}/>
