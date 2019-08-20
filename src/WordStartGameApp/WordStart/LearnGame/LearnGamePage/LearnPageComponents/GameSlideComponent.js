import React from 'react'

class GameSlideComponent extends React.Component {

    state = {
      ans: ""
    }


    onChange = (event) => {
      this.setState({
        ans: event.target.value
      })
    }

    onSubmit = (event,id) => {
      event.preventDefault()
      this.props.setAnsArray(this.state.ans, this.props.id)
    }



  render(){
  return(
    <div>
    <h1>{this.props.array.indexOf(this.props.wordObj) + 1 } Word Out of {this.props.array.length} </h1>
    <form onSubmit = {this.onSubmit}>
    <label >What is this Word:
      <input onChange = {this.onChange} type="text" data-id={this.props.id}  />
    </label>
<div>
    <label>Definition:{this.props.wordObj.definition}</label>
    </div>
    <div>
    <label>Examples:{this.props.wordObj.examples}</label>
    </div>
    <div>
    <label>Part of Speech:{this.props.wordObj.part_of_speech}</label>
    </div>
    <div>
    <label>Synonym:{this.props.wordObj.synonym}</label>
    </div>
    <input type="submit" value="Submit" />
    <button> I don't know</button>
    </form>

    </div>
  )
}
}
export default GameSlideComponent
