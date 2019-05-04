import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class LeaderComponent extends React.Component {
  trophyColor = (rank) => {
    switch(rank) {
      case 0:
        return '#D9A441'
      case 1:
        return '#A8A8A8'
      case 2:
        return '#965A38'
      default:
        return 'none'
    }
  }

  earnedTrophy = (rank) => {
    return rank <= 2
  }

  render() {
    const { leader, avatarURL, rank } = this.props

    return(
        <Card className="leader">
          { this.earnedTrophy(rank) && <div className="box">
              <div className="ribbon ribbon-top-left">
                <span className="ribbon-icon" style={{
                    color: this.trophyColor(rank)
                }}>
                  <i class="fas fa-trophy"/>
                </span>
              </div>
            </div>
          }
          <Card.Header>
            <Card.Title>
              {leader.name}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col xs={3} className="column-divider">
                <Row>
                  <img src={avatarURL} className="circle center" alt="avatar"/>
                </Row>
              </Col>
              <Col xs={6} className="column-divider">
                <Row>
                  <Col xs={6} className="text-left">
                    <span>Answered Questions</span>
                  </Col>
                  <Col xs={6} className="text-right">
                    <span>{leader.answeredQuestions}</span>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs={6} className="text-left">
                    <span>Created Questions</span>
                  </Col>
                  <Col xs={6} className="text-right">
                    <span>{leader.createdQuestions}</span>
                  </Col>
                </Row>
              </Col>
              <Col xs={3}>
                <Row>
                  <Col>
                    <h5>Score</h5>
                    <h1>{leader.score}</h1>
                  </Col>
                </Row>
              </Col>

            </Row>
          </Card.Body>
        </Card>
    )
  }
}

function mapStateToProps({users}, {leader}) {

  return {
    leader: leader,
    avatarURL: users[leader.id]['avatarURL']
  }
}

export default connect(mapStateToProps)(LeaderComponent)
