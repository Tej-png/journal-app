import React, { useState } from "react";
import LoginForm from "../LoginForm";

function Signin() {
  const [acc, setAcc] = useState({
    email:"",
    password:""
  })
  return (
    <div>
      <LoginForm acc={setAcc} accData={acc}></LoginForm>
    </div>
  );
}

export default Signin;
