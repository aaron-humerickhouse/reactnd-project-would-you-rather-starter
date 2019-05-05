import React from 'react'
import OptionComponent from './option'

class UnansweredBodyComponent extends React.Component {
  render() {
    const { question } = this.props

    return(
      <div>
        <h3>Would you rather...</h3>
        <OptionComponent option={question.optionOne} />
        <p>or ...</p>
      </div>
    )
  }
}

export default UnansweredBodyComponent
