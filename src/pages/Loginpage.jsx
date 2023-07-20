import React from "react";
import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styled from "styled-components";
import EndPoints from "../api/Endpoint";


const Maincontainer = styled.div`
  height: 400px;
  width : 560px;
  border: 2px solid  rgb(216, 213, 213);
  margin-left : 25%;
  margin-top : 60px;
  padding: 20px 0 100px 0;
`

const Loginname = styled.h1`
  text-align : center;
  color:  rgb(216, 213, 213);
`;
const Label = styled.label`
padding-bottom : 10px;`

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  // To show alert and message
  const [requestResponse, setresponse] = useState({
    textmessage: "",
    alertclass: "",
  });

  const onSubmit = (values) => {
    console.log(values)
    axios
      .post(EndPoints.LOGIN_URL, values)
      .then(
        (response) => {
          setresponse({
            textmessage: "login-success",
            alertclass: "alert alert-success",
          });
          navigate("/");       },
        (error) => {
          setresponse({
            textmessage: "unsucessful login",
            alertclass: "alert alert-danger",
          });
          console.log(error)
        }
      )
      .catch((error) => console.log(error));
  };

  //Validations
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("email is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 character long"),
  });

  return (
    <>
     <Navbar/>
    <Header/>
    <Maincontainer>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="wrapper">
            <div class={requestResponse.alertclass} role="alert">
              {requestResponse.textmessage}
            </div>
            <Loginname>Login</Loginname>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <Label>Username</Label>
                      <Field
                        type="text"
                        name="username"
                        className={
                          formik.touched.username && formik.errors.username
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="username">
                        {(errormessage) => (
                          <small className="text-danger">{errormessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <Label>Password</Label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(errormessage) => (
                          <small className="text-danger">{errormessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <p className="text-center" style={{paddingTop:"20px"}}>
              Dont have an account Sign Up <Link style={{textDecoration:"none"}} to="/Register"> here</Link>
            </p>
                    <input
                      type="submit"
                      value="Login"
                      style={{width : "370px"}}
                      className="btn btn-primary btn-block login"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>
            <br />
          
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </Maincontainer>
    </>
  );
}

export default Login;
