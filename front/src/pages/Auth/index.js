import { useState } from 'react';
import './styles.css';
import Signin from '../../components/Sign/Signin'
import Signup from '../../components/Sign/Signup'
import Home from '../Home/Home'
import Footer from '../../components/Footer/Footer'



function Auth() {

  const [signType, setSign] = useState(true)

  return (


    <div className="Auth">
      <div className="container">
        <h1>Welcome!</h1>
        <div className="buttonSign">
          <button onClick={() => setSign(true)} >Sign in</button>
          <button onClick={() => setSign(false)} >Sign up</button>
        </div>
        {signType ? <Signin /> : <Signup />}
      </div>


      
      <Footer />
      {/* <Home /> */}
    </div>



  );
}

export default Auth;