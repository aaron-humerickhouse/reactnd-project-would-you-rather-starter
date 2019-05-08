import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

class Switcher extends React.Component {
  state = {
    unansweredVariant: 'primary',
    answeredVariant: 'secondary'
  }

  handleAnswered = (event) => {
    event.preventDefault()

    const { setShowUnanswered } = this.props

    this.setState(() => ({
      unansweredVariant: 'secondary',
      answeredVariant: 'primary'
    }))

    setShowUnanswered(false)
  }

  handleUnanswered = (event) => {
    event.preventDefault()

    const { setShowUnanswered } = this.props

    this.setState(() => ({
      unansweredVariant: 'primary',
      answeredVariant: 'secondary'
    }))

    setShowUnanswered(true)
  }

  render() {
    const { unansweredVariant, answeredVariant } = this.state
    return(
      <ButtonGroup toggle className="mt-2">
        <ToggleButton type="radio" name="toggle" id="unanswered" onClick={this.handleUnanswered} variant={unansweredVariant}>
          Unanswered
        </ToggleButton>
        <ToggleButton type="radio" name="toggle" id="answered" onClick={this.handleAnswered} variant={answeredVariant}>
          Answered
        </ToggleButton>
      </ButtonGroup>
    )
  }
}

export default Switcher
