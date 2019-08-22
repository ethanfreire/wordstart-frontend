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

    onClick = (event, id )=> {
      event.preventDefault()
      this.props.iDontKnowOption( this.props.id)
    }


  render(){
  return(
  <div>

    <div className="ui centered card fixingLearnCard">
      <div className="card">
        <div className="content">
          <h1 className="header">{this.props.array.indexOf(this.props.wordObj) + 1 } Word Out of {this.props.array.length} </h1>

          <div className="description">
            <form className="ui form" onSubmit = {this.onSubmit}>
              <label >What is this Word:
              <input onChange = {this.onChange} type="text" data-id={this.props.id} required  />
              </label>
              <p></p>
              <div>
                <label>Definition:{this.props.wordObj.definition}</label>
              </div>
<p></p>
              <div>
                <label>Examples:{this.props.wordObj.examples}</label>
              </div>
              <p></p>
              <div>
                <label>Part of Speech:{this.props.wordObj.part_of_speech}</label>
              </div>
              <p></p>
              <div>
                <label>Synonym:{this.props.wordObj.synonym}</label>
              </div>
              <p></p>
              <button className="ui button" type="submit">Submit</button>
              <button className="ui button" onClick={this.onClick}>I don't know</button>
              <p></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
}
export default GameSlideComponent
