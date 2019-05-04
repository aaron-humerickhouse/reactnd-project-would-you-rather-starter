import React from 'react'
import QuestionListComponent from './questionList'

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Switcher</p>
        <QuestionListComponent />
      </div>
    )
  }
}

export default HomeComponent
