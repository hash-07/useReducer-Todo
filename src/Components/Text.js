import React, { Component } from "react";
import axios from "axios";
import '../Text.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class componentName extends Component {
 constructor(props) {
  super(props);

  this.state = {
   Item: "",
  };
  this.handler = this.handler.bind(this);
 }

 handler(e) {
  this.setState({ [e.target.name]: e.target.value });
 }

 notify = () => toast("Success!");

 submitHandler = (e) => {
  e.preventDefault();
  console.log(this.state);
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
     api: "sendNotif",
     message: this.state.Item,
    },
   })
   .then((response) => {
    console.log(response);
   })
   .catch((error) => {
    console.log(error);
   });
 };

 render() {
  const { Item } = this.state;

  return (
   <>
    <form onSubmit={this.submitHandler} style={{paddingTop : "20px"}}>
     <textarea
      type="text"
      placeholder="type here..."
      rows="4"
      cols="80"
      name="Item"
      value={Item}
      onChange={this.handler}
     ></textarea>
     <br />
     <ToastContainer />
     <button onClick={this.notify} className="btn" type="submit"
     >Submit</button>
     
    </form>
   </>
  );
 }
}

export default componentName;


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
            descn: mail,
            password: pass
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
    