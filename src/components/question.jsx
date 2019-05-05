import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import UnansweredBodyComponent from './unansweredBody';
import AnsweredBodyComponent from './answeredBody';

class QuestionComponent extends React.Component {
  handleNavigation = (event) => {
    event.preventDefault()
    const { question } = this.props
    this.props.history.push(`/question/${question.id}`)
  }

  render() {
    const { avatarURL, authorName, question, showUnanswered } = this.props

    return(
      <Card className="question" onClick={this.handleNavigation}>
        <Card.Header>
          <Card.Title>
          Asked by {authorName}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} className="column-divider">
              <Row>
                <img src={avatarURL} className="circle center horizontal-center" alt="avatar"/>
              </Row>
            </Col>
            <Col xs={8}>
              { showUnanswered && <UnansweredBodyComponent question={question}/>}
              { !showUnanswered && <AnsweredBodyComponent question={question}/>}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    )
  }
}
function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  const author = users[question['author']]
  return {
    authedUser: authedUser,
    question: question,
    avatarURL: author['avatarURL'],
    authorName: author['name']
  }
}

export default withRouter(connect(mapStateToProps)(QuestionComponent))
