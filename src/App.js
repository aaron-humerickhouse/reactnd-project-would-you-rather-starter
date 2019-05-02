import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import './App.css';
import LoginComponent from './components/login'
import Container from 'react-bootstrap/Container'
import NavComponent from './components/nav'
import HomeComponent from './components/home'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'

// import Main from 'react-bootstrap/Main'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false //(Math.floor(Math.random()*2) === 0)
    }
  }

  isLoggedIn = () => {
    const { users, authedUser } = this.props
    return users[authedUser] !== undefined
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())

    const link = document.createElement("link");

    link.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    link.rel = 'stylesheet';

    document.head.appendChild(link);
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Container className="App">
          {
            this.isLoggedIn() && <div>
              <NavComponent />
              <HomeComponent />
            </div>
          }
          {
            !this.isLoggedIn() &&<LoginComponent />
          }
        </Container>
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  console.log("in mapStateTo Props")
  return {
    loading: questions === null && users === null,
    authedUser: authedUser,
    questions: questions,
    users: users
  }
}

export default connect(mapStateToProps)(App)
