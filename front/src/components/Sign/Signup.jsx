import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import axios from 'axios'
import { useState } from 'react';

function Signup() {

  const [errorMsg, setError] = useState('');

  const history = useHistory();

  function handleClick(userName, email, password, password2) {
    if(!userName || !email || !password || !password2){
      setError("Fill form.")
    }
    else if (password !== password2) {
      setError("Passwords mismatch.")
    } else {
      axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, {
        userName: userName,
        email: email,
        password: password,
      })
        .then(e => {
          console.log(e.data)
          if (e.data === "Successfully registered") {
            // setUser(e.data)
            // setLogin(true)
            setError("Successfully registered. Enter with your login.")
            setTimeout(()=> history.go(0), 2000)
            
          } else {
            setError("An error happened")
          }

        })
        .catch(err => console.log(err))      
    }
  }

  return (
    <div className="Signin">


      <h3>Sign up</h3>
      <form className="signinForm">
        <input type="name" name="name" placeholder="Name" autoComplete="off" />
        <input type="email" name="email" placeholder="Email" autoComplete="off" />
        <input type="password" name="password" placeholder="Password" autoComplete="off" />
        <input type="password" name="password2" placeholder="Repeat password" autoComplete="off" />
      </form>
      <button className="sendButton" value="send"
        onClick={() => handleClick(document.getElementsByName("name")[0].value,
          document.getElementsByName("email")[0].value,
          document.getElementsByName("password")[0].value,
          document.getElementsByName("password2")[0].value)
        }
      >
        Sign up
      </button>
      <p>{errorMsg}</p>
    </div>


  );
}

export default Signup;
