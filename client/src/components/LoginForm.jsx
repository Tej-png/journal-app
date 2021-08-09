import React, { useState } from "react";

function LoginForm(props) {
    const [click, setClick] = useState(true)

    function register(){
        return (
            <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirn Password
            </label>
            <input
              type="password"
              name="confirm-password"
              className="form-control"
              aria-describedby="passwordHelpBlock"
            ></input>
          </div>
        )
    }
    function handleChange(event){
        const {value, name} = event.target;
        props.acc((prv) => {
            return ({
                ...prv,
                [name]:value
            })
           
        })

    }

    // function userCheck(){
    //     props.accData.email ===
    // }

    // function handleClick(){

    // }

  return (
    <div>
      <main className="form-signin">
        <form>
          {/* <img
            className="mb-4"
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          ></img> */}
          <h1 className="h3 mb-3 fw-normal">{props.user==="notRegisted" ? "Register" : "Sign in"}</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={props.user === "notRegisted" && handleChange}
            ></input>
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
              onChange={props.user === "notRegisted" && handleChange}
            ></input>
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          {props.user === "notRegisted" && register()}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            ></input>
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            {props.user === "notRegisted" ? "Sign up" : "Login in"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
