import React from 'react'
import ExampleInput from './ExampleInput'
import { connect } from 'react-redux'

const Profile = props => {
  // console.log('profile props', props)
  return (
    <div>
      <ExampleInput initialText="write something"/>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full md:w-48" src="../../img/patrick-perkins-3wylDrjxH-E-unsplash.jpg" alt="Stock photo of home with plants"/>
          </div>
          <div className="p-8">
            <div className="tracking-wide text-sm text-gray-800 font-semibold">Homebase:</div>
            <a href="#" className="uppercase block mt-1 text-lg leading-tight font-medium text-green-800 hover:underline">{props.home.nickname}</a>
            <p className="mt-2 text-gray-500">Located in {props.home.city}, {props.home.state}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return({
    name: state.currentUser.name,
    home: {
      nickname: state.currentUser.home.nickname,
      city: state.currentUser.home.city,
      state: state.currentUser.home.state,
      country: state.currentUser.home.country
    }

  })
}

export default connect(mapStateToProps)(Profile);
