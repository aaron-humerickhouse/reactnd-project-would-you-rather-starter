import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux'
import OptionComponent from './option'

class QuestionComponent extends React.Component {
  render() {
    const {avatarURL, authorName, question} = this.props

    return(
      <Card className="question">
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
              <h3>Would you rather...</h3>
              <OptionComponent option={question.optionOne} />
              <OptionComponent option={question.optionTwo} />
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

export default connect(mapStateToProps)(QuestionComponent)
