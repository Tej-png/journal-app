import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseForm from "./UseForm";
import ValidateInfo from "./ValidateInfo";

function LoginForm(props) {
  const [handleChange, value, handleSubmit, errors, handleChange2, details] =
    UseForm(submitForm, ValidateInfo);
  const [isSubmited, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    console.log("hello");
  }

  function userAcc(){
    if (props.user === "notRegisted") {
      return "/register"
    } else {
      return "/signin"
    }
  }

  function register() {
    return (
      <div className="mb-3">
        <label htmlFor="password2" className="form-label">
          Confirn Password
        </label>
        <input
          type="password"
          name="password2"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={value.password2}
          onChange={handleChange}
        ></input>
      </div>
    );
  }


  return (
    <div>
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">
            {props.user === "notRegisted" ? "Register" : "Sign in"}
          </h1>
          <div className="mb-3">
            <label htmlFor="Email1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={props.user === "notRegisted" ? handleChange : handleChange2}
              value={props.user === "notRegisted" ? value.email : details.email}
            ></input>
            {errors.email && <p style={{ color: "red" }}>* {errors.email}</p>}
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={props.user === "notRegisted" ? handleChange : handleChange2}
              value={
                props.user === "notRegisted" ? value.password : details.password
              }
            ></input>
            {errors.password && (
              <p style={{ color: "red" }}>* {errors.password}</p>
            )}
            <div name="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          {props.user === "notRegisted" && register()}
          {errors.password2 && (
            <p style={{ color: "red" }}>* {errors.password2}</p>
          )}
          <div className="mb-3 form-check">
            {props.user === "notRegisted" ? <Link to="/signin"><a>Login Instead</a></Link> :<p>Not registed? <Link to="/register"><a>Register</a></Link></p>}
            
          </div>
          <Link to={isSubmited ? "/" : userAcc} onMouseDown={handleSubmit}>
            <button
              type="submit"
              className="btn btn-primary"
              value={userAcc() === "/signin" && "signin"}
              
            >
              {props.user === "notRegisted" ? "Sign up" : "Login in"}
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
