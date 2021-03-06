import React from "react"
import Timer from "react-compound-timer"
import { withRouter } from 'react-router-dom'

const Countdown = (props) => {
  return (
    <div>
      <i className="hourglass half icon"></i>
      <Timer
        initialTime={600000}
        direction="backward"
        checkpoints={[
        {   time: 0,
            callback: () => {
              return setTimeout(function() {
                if(window.confirm("Game Over Let's go to results"))
              {
                //callback to set state
                props.timerAction()
              props.history.push( "/learnresult")
            }
                }, 0)
            }
          }
        ]}>
        {() => (
        <React.Fragment>
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
        </React.Fragment>
        )}
      </Timer>
    </div>
  )
}
export default withRouter(Countdown)
