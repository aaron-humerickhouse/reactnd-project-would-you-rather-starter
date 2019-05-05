import React from 'react'
import AnsweredOptionComponent from './answeredOption'

class AnsweredBodyComponent extends React.Component {
  totalVotes = () => {
    const { question } = this.props
    return question.optionOne.votes.length + question.optionTwo.votes.length
  }


  render() {
    const { question } = this.props

    return (
      <div>
        <AnsweredOptionComponent
          option={question.optionOne}
          totalVotes={this.totalVotes()}
        />
        <hr />
        <AnsweredOptionComponent
          option={question.optionTwo}
          totalVotes={this.totalVotes()}
        />
     </div>
    )
  }
}

export default AnsweredBodyComponent
