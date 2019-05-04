import React from 'react'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'
import { setAuthedUser } from './../actions/authedUser'
import { LinkContainer } from "react-router-bootstrap"
import { Link, withRouter } from 'react-router-dom'

class NavComponent extends React.Component {
  handleLogout = (event) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }
  componentDidMount = () => {
    console.log("location: ", this.props.location.pathname)
  }

  render() {
    const { authedUser, users } = this.props
    return(
      <div>
        <Navbar collapseOnSelect expand="md">
          <Link to="/">
            <Navbar.Brand>
              Would You Rather
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              variant="tabs"
              activeKey={this.props.location.pathname}
            >
              <LinkContainer to="/dashboard">
                <NavLink eventKey="/dashboard">Dashboard</NavLink>
              </LinkContainer>
              <LinkContainer to="/add">
                <NavLink eventKey="/add">Add Question</NavLink>
              </LinkContainer>
              <LinkContainer to="/leaderboard">
                <NavLink eventKey="/leaderboard">Leaderboard</NavLink>
              </LinkContainer>
            </Nav>
            <hr />
            <Nav>
              <Navbar.Text>
              <img
                  src={users[authedUser].avatarURL}
                  width="30"
                  height="30"
                  alt={`${authedUser} avatar`}
                  className="circle"
                />
                { ` Welcome, ${authedUser}!`}
              </Navbar.Text>
              <NavLink href="#" onClick={this.handleLogout}>Logout</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
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
