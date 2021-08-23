import React from "react";

function ValidateInfo(values, details) {
  let errors = {};

  if (typeof details !== "undefined") {
    errors = ''
  } else {
    if (!values.email) {
      errors.email = "Email Required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Email address is invalid";
    }
  
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
  
    if (!values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passsword does not match";
    }
  

  }

  return errors;
}

export default ValidateInfo;
