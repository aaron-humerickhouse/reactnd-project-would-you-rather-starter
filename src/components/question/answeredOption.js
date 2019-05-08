import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {connect} from 'react-redux'

class AnsweredOptionComponent extends React.Component {

  optionPercentage = () => {
    const {option, totalVotes} = this.props
    return option.votes.length/totalVotes * 100
  }

  votedFor = () => {
    const { option, authedUser } = this.props
    return option.votes.includes(authedUser)
  }

  render() {
    const {option, totalVotes} = this.props
    return(
      <div>
        {this.votedFor() && <div className="answered-option">
          <span className="fa-stack fa-2x voted">
            <i className="fa fa-certificate fa-stack-2x" style={{color:"#007bff"}}></i>
            <span  className="fa fa-stack-1x fa-inverse" style={{fontSize:"0.5em"}}>Voted</span>
          </span>
        </div>}

        <p style={{marginTop: '3em'}}>
          {option.text}
        </p>
        <ProgressBar label={`${this.optionPercentage().toFixed(2)}%`} now={this.optionPercentage()} />
        <p style={{marginBottom: '3em'}}>{option.votes.length} out of {totalVotes} votes</p>
      </div>
    )
  }
}
function mapStateToProps({authedUser}) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(AnsweredOptionComponent)
