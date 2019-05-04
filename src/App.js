import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import './App.css';
import LoginComponent from './components/login'
import Container from 'react-bootstrap/Container'
import NavComponent from './components/nav'
import HomeComponent from './components/dashboard'
import NewQuestionComponent from './components/newQuestion'
import LeaderBoardComponent from './components/leaderboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'

// import Main from 'react-bootstrap/Main'

class App extends React.Component{
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
      <Router>
        <Fragment>
          <LoadingBar />
          <Container className="App">
            {
              this.isLoggedIn() && <div>
                <NavComponent />
                <div>
                  <Route path='/' exact component={HomeComponent} />
                  <Route path='/dashboard' component={HomeComponent} />
                  <Route path='/questions/new' component={NewQuestionComponent} />
                  <Route path='/leaderboard' component={LeaderBoardComponent} />
                </div>
              </div>
            }
            {
              !this.isLoggedIn() &&<LoginComponent />
            }
          </Container>
        </Fragment>
      </Router>
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
