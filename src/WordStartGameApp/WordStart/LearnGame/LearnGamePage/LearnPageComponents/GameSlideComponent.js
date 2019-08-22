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
              <label><h2>What is this Word: </h2>
              <input onChange = {this.onChange} type="text" data-id={this.props.id}
              placeholder="please enter an answer" required  />
              </label>
              <p></p>
              <div>
                <label><h3>Definition:{this.props.wordObj.definition}</h3></label>
              </div>
              <p></p>
              <div>
                <label><h3>Examples:{this.props.wordObj.examples}</h3></label>
              </div>
              <p></p>
              <div>
                <label><h3>Part of Speech:{this.props.wordObj.part_of_speech}</h3></label>
              </div>
              <p></p>
              <div>
                <label><h3>Synonym:{this.props.wordObj.synonym}</h3></label>
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
