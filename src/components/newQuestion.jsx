import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { formatQuestion } from './../helpers'
import { addQuestion } from './../actions/questions'

class NewQuestionComponent extends React.Component {
  state = {
    optionOne: null,
    optionTwo: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { authedUser, dispatch } = this.props
    const { optionOne, optionTwo } = this.state

    dispatch(addQuestion(formatQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser})))
    this.props.history.push('/dashboard')
  }

  handleOptionOneChange = (event) => {
    const optionOne = event.target.value

    this.setState(() => ({
      optionOne: optionOne
    }))
  }

  handleOptionTwoChange = (event) => {
    const optionTwo = event.target.value

    this.setState(() => ({
      optionTwo: optionTwo
    }))
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title>
            Create New Question
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <p>Would you rather...</p>
          <Form>
            <Form.Group controlId="option-one">
              <Form.Control type="input" placeholder="Option One" onChange={this.handleOptionOneChange}></Form.Control>
            </Form.Group>
            <p>or</p>
            <Form.Group controlId="option-two">
              <Form.Control type="input" placeholder="Option Two" onChange={this.handleOptionTwoChange}></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(NewQuestionComponent)
