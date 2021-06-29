import React from 'react'
import { connect } from 'react-redux'
import Plant from './Plant'

const Plants = props => {
console.log(props.plants)
console.log(props.userName)
  return (
    <div className="p-6 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 md:grid-rows-6">
      {props.plants.map(plantInfo => <Plant info={plantInfo} key={plantInfo.id}/>)}
    </div>
    // <div className="h-64 grid grid-rows-3 grid-flow-col gap-4">

  )
}

const mapStateToProps = state => {
  return({
    userName: state.currentUser.name,
    plants: state.currentUser.plants
  })
}

export default connect(mapStateToProps)(Plants);


//prev code
{/* <div className="p-6 grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 md:grid-rows-6">
      <div className="p-6 rounded-xl shadow-md max-w-sm mx-auto">
        <p className="p-2">{props.userName}</p>
        <p className="p-2">{props.plants[0].common_name}</p>
        <p className="p-2">{props.plants[0].location}</p>
      </div>
    </div> */}
