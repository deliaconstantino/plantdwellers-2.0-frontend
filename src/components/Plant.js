import React from 'react'

const Plant = props => {
  return (
    <div className="p-6 rounded-xl shadow-md max-w-sm mx-auto">
        <p className="p-2">{props.info.common_name}</p>
        <p className="p-2">{props.info.scientific_name}</p>
        <p className="p-2">{props.info.location}</p>
    </div>
  )
}

export default Plant;
