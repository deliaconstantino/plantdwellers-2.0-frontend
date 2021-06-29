import React from 'react'
import { connect } from 'react-redux'

const Profile = props => {
  console.log('profile props', props)
  return (
    <div>
      hello
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
