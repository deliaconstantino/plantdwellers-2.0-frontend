import react from 'react';

const login = props => {
  return (
    <form>
      <label>Email:</label>
      <input type="text" placeholder="email"/>
      <label>Password:</label>
      <input type="password" placeholder="password"/>
      <input type="submit"/>
    </form>
  )
}


export default login;
