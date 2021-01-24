import React from "react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewLogin = () => {
 let history = useHistory();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [data, setData] = useState("");

 const SubmitHandler = (e) => {
    e.preventDefault();
    if(validate()){
      axios
        .request({
          method: "POST",
          url: "https://sutradhar.tech:8082/api/global",
          headers: {
            "cache-control": "no-cache",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset=utf-8",
          },
          data: {
            AppShortName: "shg",
            api: "loginAdmin",
            descn: email,
            password: password
            // message: this.state.Item,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      }else{
        console.log("Go away.")
      }
      
    }


    const validate = () => {
        const email = document.getElementById("email");
        const emailVal = email.value.trim();
        
        if (emailVal === "") {
          setErrorMsg(email, "email cannot be blank");
          isValid = false;
        } else if (!isEmail(emailVal)) {
          setErrorMsg(email, "Not a valid email");
          isValid = false;
        } else {
          setSuccessMsg(email);
          isValid = true;
        }
        return isValid;
      }

      let isValid = false;

      function setErrorMsg(input, errorMsgs) {
        //const formControl = input.parentElement;
        //  const small = formControl.querySelector("small");
        const small = document.getElementById("small");
        small.className = "form_control error";
        small.innerText = errorMsgs;
        
      }
      
      function setSuccessMsg(input) {
        const formControl = input.parentElement;
        formControl.className = "form_control success";
      }
      
      const isEmail = (emailVal) => {
        var atSymbol = emailVal.indexOf("@");
        if (atSymbol < 1) return false;
        
        var dot = emailVal.lastIndexOf(".");
        if (dot <= atSymbol + 2) return false;
        
        if (dot === emailVal.length - 1) return false;
        return true;
      };
    
 return (
  <div className="container">
   <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Login</h2>
    <form onSubmit={(e) => SubmitHandler(e)}>
     <div className="form-group">
      <input
       type="email"
       name="email"
       id="email"
       className="form-control form-control-lg"
       placeholder="Enter Your E-mail Address"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
     </div>

     <div className="form-group">
      <input
       type="password"
       className="form-control form-control-lg"
       name="Passord"
       placeholder="Enter Your Passord"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
     </div>

     <button type="submit" className="btn btn-primary btn-block">
      Login
     </button>
    </form>
    <h1>{data}</h1>
    <p className="forgot-password text-right">
     Not Registered <a href="/reg">sign up?</a>
    </p>
   </div>
  </div>
 );
};

export default NewLogin;
