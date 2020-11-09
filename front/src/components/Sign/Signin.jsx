import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import axios from 'axios'

function Signin() {

  const history = useHistory();

  function handleClick(email, password) {
    axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, {
      email: email,
      password: password
    })
      .then(e => {
        console.log(e.data)
        if (e.data !== "Email or password incorrect.") {
          // setUser(e.data)
          // setLogin(true)
          history.push("/home",  e.data);
        } else {
          // setErrorMsg(e.data)
        }

      })
      .catch(err => console.log(err))
    
  }


  return (
    <div className="Signin">
      <h3>Sign in</h3>
      <form className="signinForm">
        <input type="email" name="email" placeholder="Email" autoComplete="off" />
        <input type="password" name="password" placeholder="Password" autoComplete="off" />
      </form>
      <button className="sendButton" value="send"
        onClick={() => handleClick(document.getElementsByName("email")[0].value, document.getElementsByName("password")[0].value)}
      >
        Sign in
      </button>
    </div>


  );
}

export default Signin;
