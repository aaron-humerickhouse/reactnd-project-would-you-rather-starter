import React from 'react'
import QuestionListComponent from './questionList'
import Switcher from './switcher'

class HomeComponent extends React.Component {
  state = {
    showUnanswered: true
  }

  setShowUnanswered = (showUnanswered) => {
    this.setState(() => ({
      showUnanswered: showUnanswered
    }))
  }

  render() {
    const { showUnanswered } = this.state

    return (
      <div>
        <Switcher setShowUnanswered={this.setShowUnanswered} showUnanswered={showUnanswered} />
        <QuestionListComponent showUnanswered={showUnanswered}/>
      </div>
    )
  }
}

export default HomeComponent
