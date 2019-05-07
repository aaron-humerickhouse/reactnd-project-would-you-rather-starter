import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from './../actions/authedUser'
import { LinkContainer } from "react-router-bootstrap"
import { Link, withRouter } from 'react-router-dom'

class NavComponent extends React.Component {
  handleLogout = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(null))
  }

  render() {
    const { authedUser, users } = this.props
    return(
      <Navbar collapseOnSelect expand="md">
        <Link to="/">
          <Navbar.Brand>
            Would You Rather
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {!!authedUser && <div>
            <Nav
              variant="tabs"
              activeKey={this.props.location.pathname}
            >
              <LinkContainer to="/dashboard">
                <Nav.Link eventKey="/dashboard">Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add">
                <Nav.Link eventKey="/add">Add Question</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/leaderboard">
                <Nav.Link eventKey="/leaderboard">Leaderboard</Nav.Link>
              </LinkContainer>
              <hr style={{marginTop: "-0.5em"}}/>
            </Nav>
          </div>}
          <Nav className="ml-auto">
            <Nav.Item>
              {!!authedUser && !!Object.keys(users).length && <div>
                <img
                  src={users[authedUser].avatarURL}
                  width="43"
                  height="43"
                  alt={`${authedUser} avatar`}
                  className="circle"
                />
                <span>Welcome, {authedUser}!</span>
              </div>}
              {!authedUser && <span>
                Please Sign In
              </span>}
            </Nav.Item>
            {!!authedUser && <Nav.Link href="#" onClick={this.handleLogout}>
              Logout
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users
  }
}


export default withRouter(connect(mapStateToProps)(NavComponent))
