import React from 'react'
import QuestionListComponent from './questionList'

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <QuestionListComponent />
      </div>
    )
  }
}

export default HomeComponent
