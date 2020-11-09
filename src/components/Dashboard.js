import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
         
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ tweets }) {
  return {
  }
}

export default connect(mapStateToProps)(Dashboard)