import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UnansweredBodyComponent from './unansweredBody';
import AnsweredBodyComponent from './answeredBody';
import DetailQuestionBodyComponent from './detailBody';

class QuestionComponent extends React.Component {
  componentDidMount() {
    const { question, history } = this.props;
    if (!question) {
      history.push('/404');
    }
  }

  render() {
    const {
      avatarURL, authorName, question, showUnanswered, isDetail,
    } = this.props;

    return (
      <Card className="question">
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
      </Card>
    );
  }
}
function mapStateToProps({ authedUser, users, questions }, props) {
  const id = props.id || props.location.pathname.split('/').slice(-1);

  const question = questions[id];
  const author = users[question.author];
  return {
    authedUser,
    question,
    avatarURL: author.avatarURL,
    authorName: author.name,
  };
}

export default withRouter(connect(mapStateToProps)(QuestionComponent));
