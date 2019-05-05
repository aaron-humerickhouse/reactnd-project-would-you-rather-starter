import React from 'react'
import QuestionComponent from './question.jsx'
import {connect} from 'react-redux'

class QuestionListComponent extends React.Component {
  render() {
    const { questions, showUnanswered } = this.props

    return(
      <div>
        {
          questions.map(question =>
            <QuestionComponent key={question} id={question} showUnanswered={showUnanswered}/>
          )
        }
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}, {showUnanswered}) {

  const answeredQuestions = Object.keys(users[authedUser]['answers'])
  const unansweredQuestions = Object.keys(questions).filter(question => !answeredQuestions.includes(question))

  return {
    showUnanswered: showUnanswered,
    questions: showUnanswered ? unansweredQuestions.sort() : answeredQuestions.sort()
  }
}

export default connect(mapStateToProps)(QuestionListComponent)
