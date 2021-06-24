import React from 'react';
import './App.css';
import Login from './components/Login'

class App extends React.Component {

  // componentDidMount() { TODO: auto-login functionality
  //   const token = localStorage.getItem("token")
  //   if (token){
  //     fetch('http://localhost:3001/api/v1/login', {
  //       Authorization: `Bearer ${token}`
  //     })
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  //   }
  // }

  render () {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
