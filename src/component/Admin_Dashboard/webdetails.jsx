import React from 'react'

const webdetails = (props) => {
  return (
    <div>
    <div className="container">
      <div className="bg-dark-blue p-5" style={{ width: '15rem' }}>
        <div className="card-body">
          <h5 className="card-title">{props.desc}</h5>
          <p className="card-text fs-2 mt-2">
            {props.count}
          </p>
        </div>
        <a href="" className='text-white'>
            More Info
        </a>
      </div>
      
    </div>
    </div>
  )
}

export default webdetails
