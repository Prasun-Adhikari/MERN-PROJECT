import React, { useState } from "react";
import "./log_Sign.css";
import Axios from "axios";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response = await Axios.post("http://localhost:5000/submit", {name ,email, password});
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
          <label htmlFor="text">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="login_btn">SignIn</button>
        </form>
      </div>

        <div className="sideImg">
            <img src="public/images/hotair.jpg" id="side-img"/>
        </div>
    </div>
  );
}



export default SignUp;
