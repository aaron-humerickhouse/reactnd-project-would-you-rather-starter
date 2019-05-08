import React from 'react'
import AnsweredOptionComponent from './answeredOption'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class AnsweredBodyComponent extends React.Component {
  componentDidMount() {

  }
  totalVotes = () => {
    const { question } = this.props
    return question.optionOne.votes.length + question.optionTwo.votes.length
  }

  handleNavigation = (event) => {
    event.preventDefault()
    const { question } = this.props
    this.props.history.push(`/question/${question.id}`)
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
        <Button variant="outline-primary" onClick={this.handleNavigation}>View Details</Button>
     </div>
    )
  }
}


export default withRouter(connect()(AnsweredBodyComponent))
