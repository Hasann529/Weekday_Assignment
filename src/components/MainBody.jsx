import React from 'react'
import JobCard from './JobCard'

const MainBody = ({jobDesList}) => {
  return (
    <div className='main-body'>
    <div className='inner'>

    {jobDesList.map(job => <JobCard key={job.jdUid} job={job} />)}
    </div>
    </div>
  )
}

export default MainBody
