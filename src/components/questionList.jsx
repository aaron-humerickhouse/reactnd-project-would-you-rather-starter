import React from 'react'
import QuestionComponent from './question.jsx'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class QuestionListComponent extends React.Component {
  showQuestions = () => {
    const { questions } = this.props
    return questions.length > 0
  }
  render() {
    const { questions, showUnanswered } = this.props

    return(
      <div>
        {
          this.showQuestions() && questions.map(question =>
            <QuestionComponent key={question} id={question} showUnanswered={showUnanswered}/>
          )
        }
        {
          !this.showQuestions() && <Row>
            <Col md={{span: 6, offset: 3}} sm={{span: 8, offset: 2}}>
              <Card style={{
                marginTop: '2em'
              }}>
                <Card.Body>No Available Questions</Card.Body>
              </Card>
            </Col>
          </Row>
        }
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}, {showUnanswered}) {
  // Messy, but it works
  const answeredQuestions = Object.keys(users[authedUser]['answers'])
  const unansweredQuestions = Object.keys(questions).filter(question => !answeredQuestions.includes(question))

  const sortedAnsweredQuestions = Object.values(answeredQuestions.map(qid => {
    return questions[qid]
  })).sort((a,b) => b.timestamp - a.timestamp).map(question => question.id)

  const sortedUnansweredQuestions = Object.values(unansweredQuestions.map(qid => {
    return questions[qid]
  })).sort((a,b) => b.timestamp - a.timestamp).map(question => question.id)

  return {
    showUnanswered: showUnanswered,
    questions: showUnanswered ? sortedUnansweredQuestions : sortedAnsweredQuestions
  }
}

export default connect(mapStateToProps)(QuestionListComponent)
