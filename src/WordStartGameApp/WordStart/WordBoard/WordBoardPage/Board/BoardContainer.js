import React from 'react'
import WordCardComponent from './WordCardComponent.js'

class BoardContainer extends React.Component {
  deleteWord = (id) => {
    console.log(id)
    this.props.deleteUserWord(id)
  }

  render(){
    return(
      <div>
        {console.log(this.props.currentUserWords[0])}
        {this.props.currentUserWords.map(wordObj => <WordCardComponent wordObj={wordObj} key={wordObj.id} array={this.props.currentUserWords} deleteWord={this.deleteWord} id={wordObj.id}/>)}
      </div>
    )
  }
}
export default BoardContainer
