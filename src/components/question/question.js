import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import UnansweredBodyComponent from './unansweredBody';
import AnsweredBodyComponent from './answeredBody';
import DetailQuestionBodyComponent from './detailBody';

class QuestionComponent extends React.Component {
  render() {
    const {
      avatarURL, authorName, question, showUnanswered, isDetail, location
    } = this.props;

    return (
      <div>
        {!question && <Redirect to={{
          pathname: '/404',
          state: { from: location.pathname }}} />
        }
        {!!question && <Card className="question">
          <Card.Header>
            <Card.Title>
            Asked by
              {' '}
              {authorName}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={4} className="column-divider">
                <Row>
                  <img src={avatarURL} className="circle center horizontal-center" alt="avatar" />
                </Row>
              </Col>
              <Col xs={8}>
                { showUnanswered && !isDetail && <UnansweredBodyComponent question={question} />}
                { !showUnanswered && !isDetail && <AnsweredBodyComponent question={question} />}
                {isDetail && <DetailQuestionBodyComponent question={question} />}
              </Col>
            </Row>
          </Card.Body>
        </Card>}
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, props) {
  const id = props.id || props.location.pathname.split('/').slice(-1);
  const question = questions[id];

  if(!question) {
    return {
      authedUser,
      question: null,
      avatarURL: null,
      authorName: null,
    }
  }

  const author = users[question.author];
  return {
    authedUser,
    question,
    avatarURL: author.avatarURL,
    authorName: author.name,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionComponent));
