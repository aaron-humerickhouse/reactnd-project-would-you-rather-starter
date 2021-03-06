import React, {Fragment} from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import './App.css';
import LoginComponent from './components/login'
import Container from 'react-bootstrap/Container'
import NavComponent from './components/nav'
import DashboardComponent from './components/dashboard/dashboard'
import AddQuestionComponent from './components/addQuestion'
import LeaderBoardComponent from './components/leaderboard/leaderboard'
import { Redirect, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import QuestionComponent from './components/question/question'
import Page404Component from './components/404'

class App extends React.Component{
  isLoggedIn = () => {
    const { users, authedUser } = this.props
    return users[authedUser] !== undefined
  }

  componentDidMount() {
    const bootstrap = document.createElement("link");
    bootstrap.href = "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    bootstrap.rel = 'stylesheet';

    const fontAwesome = document.createElement("link");
    fontAwesome.href = "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
    fontAwesome.rel = 'stylesheet';

    document.head.appendChild(bootstrap);
    document.head.appendChild(fontAwesome);

    this.props.dispatch(handleInitialData())

  }
  render() {
    const { loading } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavComponent />
          {
            loading === false && <Container className="App">
              {
                this.isLoggedIn() && <div>
                  <Switch>
                    {/* Redirect required for bootstrap tab navigation highlighting, Dashboard at '/' would always be highlighted */}
                    <Route path='/' exact render={() =>  <Redirect to="/dashboard"/>} />
                    <Route path='/dashboard' exact component={DashboardComponent} />
                    <Route path='/add' component={AddQuestionComponent} />
                    <Route path='/leaderboard' component={LeaderBoardComponent} />
                    <Route path='/question/:id' component={() => <QuestionComponent isDetail={true} /> } />
                    <Route path='/404' component={Page404Component} />
                    <Route component={Page404Component} />
                  </Switch>
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

function mapStateToProps({ authedUser, questions, users }) {
  return {
    loading: !Object.keys(questions).length || !Object.keys(users).length,
    authedUser: authedUser,
    questions: questions,
    users: users,
  }
}

export default connect(mapStateToProps)(App)
