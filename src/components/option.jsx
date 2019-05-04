import React from 'react'

class OptionComponent extends React.Component {
  render() {
    const { option } = this.props
    return(
      <div>
        <p>{option.text}</p>
        <p>{option.votes.length} votes</p>
      </div>
    )
  }
}

export default OptionComponent
