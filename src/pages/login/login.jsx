import React, { useState } from "react";
import "./log_Sign.css";
import Axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await Axios.post("http://localhost:5000/login", {email, password});
    }catch(err){
      console.log("Opps" + err);
    };
  }

  return (    

    <div className="box">
      <div className="log_sign">
        <h1>Welcome</h1>
        <h4>Make Your Trading Journey Simpler</h4>

        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="login_btn">Login</button>
          <h3>Or,Login with</h3>

        {/* sign in with google page */}
        <div className="google_sign-in">
        
        <button type="submit" className="login_google_btn"><img src="public/images/google_icon.webp" className="google_Img"/><p>Sign up with google</p></button>
        </div>
        <h3>Don't have an account <a href="/signup">Sign Up</a></h3>
        </form>
      </div>

        <div className="sideImg">
            <img src="public/images/hotair.jpg" id="side-img"/>
        </div>
    </div>
  );
}



export default Login;
