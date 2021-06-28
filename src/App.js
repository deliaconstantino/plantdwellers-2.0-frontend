import React from 'react';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {   //TODO: auto-login functionality
    const token = localStorage.getItem("token")
    if (token){

      fetch('http://localhost:3001/api/v1/profile', {method:'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
     })
      .then(resp => resp.json())
      .then(response => {
        console.log(response)
        this.props.dispatch({type: "SET_CURRENT_USER", user: response.data.attributes})
      })
    }
  }

  render () {
    return (
      <div className="App">
        {this.props.loggedIn ? <Logout /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser.email
  })
}

export default connect(mapStateToProps)(App);
