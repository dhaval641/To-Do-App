import React, { useState } from "react";
import "./loginpage.scss";
import mylogo from "../images/mylogo.png";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const onRegister = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/profilepage");

      //   const pwd = new FormData(event.target).get("pwd");
      //   const confpwd = new FormData(event.target).get("confpwd");
      //   if (confpwd === pwd) {
      //   }
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <div className="register-page">
      <div className="leftside">
        <img src={mylogo} alt="" className="mylogo" />
      </div>
      <div className="register-f">
        <h4 className="headings">Register New Account</h4>
        <form className="register-form" onSubmit={onRegister}>
          <div className="input-group2">
            <input
              formcontrolname="fname"
              type="text"
              className="fname"
              placeholder="First Name"
              required
            />
            <input
              formcontrolname="lname"
              type="text"
              className="lname"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-group">
            <input
              formcontrolname="email"
              type="email"
              className="form-control"
              placeholder="Enter Email or Mobile"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div className="input-group">
            <input
              name="pwd"
              formcontrolname="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div className="input-group">
            <input
              name="confpwd"
              formcontrolname="password"
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <button className="buttonsignup">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
