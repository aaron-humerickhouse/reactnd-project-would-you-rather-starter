import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom'

class UnansweredPollBodyComponent extends React.Component {
  state = {
    option: null
  }
  // componentDidMount = () => {
  //   // If answered, redirect to answered
  // }

  handleSubmit = (event) => {
    event.preventDefault()

    const {question, dispatch, authedUser} = this.props
    const {option} = this.state
    dispatch(handleAnswerQuestion(question, option, authedUser))
    this.props.history.push('/dashboard')
  }

  setOption = (event) => {
    let option = null
    switch(event.target.id) {
      case 'option-choice-1':
        option = 'optionOne'
        break
      case 'option-choice-2':
        option = 'optionTwo'
        break
      default:
        option = null
    }

    this.setState(() => ({
      option: option
    }))
  }

  render() {
    const {question} = this.props

    return(
      <Form style={{textAlign: 'left'}}>
        <fieldset>
          <Form.Group as={Row}>
            <Col xs={3}>
              <Form.Label>Would you rather...</Form.Label>
            </Col>
            <Col xs={9}>
              <Form.Check
                type="radio"
                label={question.optionOne.text}
                name="option-choice"
                id="option-choice-1"
                onClick={this.setOption}
              />
              <Form.Check
                type="radio"
                label={question.optionTwo.text}
                name="option-choice"
                id="option-choice-2"
                onClick={this.setOption}
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col xs={12} style={{textAlign: 'center'}}>
            <Button type="submit" onClick={this.handleSubmit}>Vote</Button>
          </Col>
        </Form.Group>

      </Form>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser: authedUser
  }
}

export default withRouter(connect(mapStateToProps)(UnansweredPollBodyComponent))
