import React from 'react'
import QuestionComponent from './question.jsx'
import {connect} from 'react-redux'

class QuestionListComponent extends React.Component {
  render() {
    const { questions } = this.props
    console.log(questions)
    return(
      <div>
        <p>Switcher</p>
        {
          questions.map(question =>
            <QuestionComponent key={question} id={question} />
          )
        }
      </div>
    )
  }
}

function mapStateToProps({questions}) {
  return {
    questions: Object.keys(questions).sort()
  }
}

export default connect(mapStateToProps)(QuestionListComponent)
