import React from 'react'
import {connect} from 'react-redux'
import LeaderComponent from './leader'

class LeaderBoardComponent extends React.Component {
  render() {
    const {leaders} = this.props

    return (
      <div>
      <h2>Leader Board</h2>
        {
          leaders.map((leader, index) =>
            <LeaderComponent key={leader.name} rank={index} leader={leader} />
          )
        }
      </div>
    )
  }
}

function mapStateToProps({users}) {
  const leaders = Object.values(users).map(user => {
    const answered = Object.keys(user.answers).length
    const created = user.questions.length

    return {
      id: user.id,
      name: user.name,
      answeredQuestions:  answered,
      createdQuestions: created,
      score: answered+created
    }
  })

  return {
    leaders: leaders.sort((a,b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(LeaderBoardComponent)
