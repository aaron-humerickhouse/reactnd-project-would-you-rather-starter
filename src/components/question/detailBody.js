import React from 'react'
import UnansweredDetailBodyComponent from './uansweredDetailBody'
import AnsweredBodyComponent from './answeredBody'
import {connect} from 'react-redux'

class DetailBodyComponent extends React.Component {
  hasVoted = () => {
    const {question, authedUser} = this.props

    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes

    return (optionOneVotes.includes(authedUser) || optionTwoVotes.includes(authedUser))
  }

  render() {
    const { question } = this.props
    return(
      <div>
        {this.hasVoted() && <AnsweredBodyComponent question={question}/>}
        {!this.hasVoted() && <UnansweredDetailBodyComponent question={question}/>}
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return ({
    authedUser: authedUser
  })
}

export default connect(mapStateToProps)(DetailBodyComponent)
