import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import './App.css';
import LoginComponent from './components/login'
import Container from 'react-bootstrap/Container'
import NavComponent from './components/nav'
import HomeComponent from './components/dashboard'
import AddQuestionComponent from './components/addQuestion'
import LeaderBoardComponent from './components/leaderboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import QuestionComponent from './components/question'

// import Main from 'react-bootstrap/Main'

class App extends React.Component{
  isLoggedIn = () => {
    const { users, authedUser } = this.props
    return users[authedUser] !== undefined
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())

    const bootstrap = document.createElement("link");
    bootstrap.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    bootstrap.rel = 'stylesheet';

    const fontAwesome = document.createElement("link");
    fontAwesome.href = "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
    fontAwesome.rel = 'stylesheet';

    document.head.appendChild(bootstrap);
    document.head.appendChild(fontAwesome);
  }
  render() {
    const { loading } = this.props
    console.log("loading", loading)
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavComponent />
          {
            loading === false && <Container className="App">
              {
                this.isLoggedIn() && <div>
                  <div>
                    <Route path='/' exact component={HomeComponent} />
                    <Route path='/dashboard' component={HomeComponent} />
                    <Route path='/add' component={AddQuestionComponent} />
                    <Route path='/leaderboard' component={LeaderBoardComponent} />
                    <Route path='/question/:id' component={() => <QuestionComponent isPoll={true} /> } />
                  </div>
                </div>
              }
              {
                !this.isLoggedIn() &&<LoginComponent />
              }
            </Container>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, questions, users, payload }) {
  return {
    loading: !Object.keys(questions).length || !Object.keys(users).length,
    authedUser: authedUser,
    questions: questions,
    users: users,
  }
}

export default connect(mapStateToProps)(App)
