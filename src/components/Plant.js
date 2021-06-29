import React from 'react'

const Plant = props => {
  return (
    <div className="p-8 border-box rounded-xl shadow-md max-w-sm flex flex-wrap">
      <div className="p-2">
        <img src="../../img/eco-construction-1894026_1280.png" width="100"/>
      </div>
      <div className="p-2">
        <p className="p-2">{props.info.common_name}</p>
        <p className="p-2">{props.info.scientific_name}</p>
        <p className="p-2">{props.info.location}</p>
      </div>
    </div>
  )
}

export default Plant;
// flex, flex-shrink-0, and p-6
