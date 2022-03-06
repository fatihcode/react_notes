import React from 'react'
import { connect } from 'react-redux'
import { updateJob } from './actions/jobAction'

export const Job = (props) => {
  return (
    <div>
      <h3>Job Comp</h3>
      <h4>jobReducer Name:
        <ul>
          {props.jobReducer.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </h4>
      
      <button>Update Job</button>

    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return state
}

const mapDispatchToProps = { updateJob }

export default connect(mapStateToProps, mapDispatchToProps)(Job)

