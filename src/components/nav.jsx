import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'

class NavComponent extends React.Component {
  render() {
    const { authedUser } = this.props
    return(
      <Nav
        variant="tabs"
        activeKey="/"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/questions/new">New Question</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/leader-board">Leader Board</Nav.Link>
        </Nav.Item>
        Welcome, {authedUser}!
      </Nav>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}


export default connect(mapStateToProps)(NavComponent)
