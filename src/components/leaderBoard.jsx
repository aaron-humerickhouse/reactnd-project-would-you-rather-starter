import React from 'react'
import {connect} from 'react-redux'
class LeaderBoardComponent extends React.Component {
  render() {
    return (
      <h2>Leader Board</h2>
    )
  }
}

function mapStateToProps({users, questions}) {

}

export default connect(mapStateToProps)(LeaderBoardComponent)
