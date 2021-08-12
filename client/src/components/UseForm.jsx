import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function UseForm(callback,validate) {
  const [value, setValue] = useState({
    email: "admin@gmail.com",
    password: "1234567",
    password2: "1234567",
  });
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmited, setSubmit] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setValue((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleChange2(event) {
    const { name, value } = event.target;

    setDetails((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    if (e.target.value === "signin"){
      setError(validate(value, details));
      console.log("sig");
    } else  {
      setError(validate(value));
      console.log("reg");
    }
    setSubmit(true)
  }

  useEffect(()=> {
      if(Object.keys(error).length === 0 && isSubmited) {
          callback()

      }
  },[error])

  return [handleChange, value, handleSubmit, error, handleChange2, details, setError];
}

export default UseForm;
