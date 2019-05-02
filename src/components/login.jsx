import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import { setAuthedUser } from './../actions/authedUser'

class LoginComponent extends React.Component {
  state = {
    selectedUser: null
  }

  handleLogin = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.selectedUser))
  }

  handleChange = (event) => {
    const selectedUser = event.target.value

    this.setState(() => ({
      selectedUser: selectedUser
    }))
  }

  render() {
    const {users} = this.props
    return (
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleLogin}>
                  <Form.Group as={Row} controlId="userInput">
                    <Form.Label column sm={2}>User</Form.Label>
                    <Col sm={10}>
                      <Form.Control as="select" onChange={this.handleChange}>
                        <option>Choose a User</option>
                        {
                          users.map(user =>
                            <option key={user}>{user}</option>
                            )
                        }
                      </Form.Control>
                    </Col>
                  </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleLogin}>Login</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}></Col>
      </Row>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.keys(users).sort()
  }
}

export default connect(mapStateToProps)(LoginComponent)
