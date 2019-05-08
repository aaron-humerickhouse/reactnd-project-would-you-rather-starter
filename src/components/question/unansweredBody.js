import React from 'react'
import OptionComponent from './option'
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom'

class UnansweredBodyComponent extends React.Component {
  handleNavigation = (event) => {
    event.preventDefault()
    const { question } = this.props
    this.props.history.push(`/question/${question.id}`)
  }

  render() {
    const { question } = this.props

    return(
      <div>
        <h3>Would you rather...</h3>
        <OptionComponent option={question.optionOne} />
        <p>or ...</p>
        <Button variant="outline-primary" onClick={this.handleNavigation}>View Poll</Button>
      </div>
    )
  }
}

export default withRouter(UnansweredBodyComponent)
