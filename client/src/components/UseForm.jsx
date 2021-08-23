import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function UseForm(callback, validate) {
  const [value, setValue] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isSubmited, setSubmit] = useState(false);
  const [page, setPage] = useState("");
  const { signup, login } = useAuth();
  const history = useHistory();

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
    e.preventDefault();
    if (e.target.value === "signin") {
      login(details.email, details.password).catch((err) => {
        if (!err) {
          console.log("home");
        } else {
          const errorCode = err.code;
          const errorMessage = err.message;
          if (errorCode === "auth/wrong-password") {
            setError({ password: "wrong password" });
          } else if (errorCode == "auth/invalid-email") {
            setError({ email: "Email is not valid" });
          } else if (errorCode == "auth/user-not-found") {
            setError({ email: "email not found" });
          }
        }
      });
      setPage("signin");
    } else {
      setError(validate(value));
      signup(value.email, value.password).catch((err) => {
        if (!err) {
          console.log("home");
        } else {
          const errorCode = err.code;
          const errorMessage = err.message;
          if (errorCode === "auth/wrong-password") {
            setError({ password: "wrong password" });
          } else if (errorCode == "auth/invalid-email") {
            setError({ email: "Email is not valid" });
          } else if (errorCode == "auth/user-not-found") {
            setError({ email: "email not found" });
          }
        }
      });
      setPage("register");
    }
    console.log("error");
    console.log(value.email);
    setSubmit(true);
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmited) {
      callback();
    }
  }, [error]);

  return [
    handleChange,
    value,
    handleSubmit,
    error,
    handleChange2,
    details,
    setError,
  ];
}

export default UseForm;
