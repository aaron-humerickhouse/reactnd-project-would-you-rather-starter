import React from 'react'

class OptionComponent extends React.Component {
  render() {
    const { option } = this.props
    return(
      <p>{option.text}</p>
    )
  }
}

export default OptionComponent
