import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import styled from "@emotion/styled";

const Container = styled.div`
margin-top: 20px;
  height: 550px;
  width: 450px;
  border: 2px solid rgb(216, 213, 213);
  margin-left : 30%;
  padding: 17px;
`
const Mainhead = styled.h2`
padding-top: 3px;
font-size : 50px;
color: rgb(216, 213, 213);
text-align: center;
letter-spacing: 3px;
`
const Formgroup = styled.div`
  margin-top: 20px;
`
const Registerbutton = {
  marginTop: "10px",
  width: "400px",
}




function Registerpage() {

  // Initializing 
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  };

  
  const onSubmit = (values) => {
    alert("you Registered succesfully")
  };

  // Validation
  const validationSchema = Yup.object({
    firstname: Yup.string().required("first name is required"),
    lastname: Yup.string().required("last name is required"),
    email: Yup.string().required("email name is required").email(),
    password: Yup.string()
      .required("password name is required")
      .min(6, "password must 6 digit long"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'password must match')
      .required(" confirm password is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-12">
            <div>
            </div>
            <Mainhead>Sign Up</Mainhead>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <Formgroup>
                <input
                  placeholder="Firstname"
                  type="text"
                  name="firstname"
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <small className="text-danger">
                    {formik.errors.firstname}
                  </small>
                ) : null}
              </Formgroup>

              <Formgroup>
                <input
                  placeholder="lastname"
                  type="text"
                  name="lastname"
                  className={
                    formik.touched.lastname && formik.errors.lastname
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <small className="text-danger">
                    {formik.errors.lastname}
                  </small>
                ) : null}
              </Formgroup>

              <Formgroup>
                <input
                  placeholder="Email Address"
                  type="text"
                  name="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </Formgroup>
              <Formgroup>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </Formgroup>
              <Formgroup>
                <input
                  placeholder="Confirm Password"
                  type="confirmpassword"
                  name="confirmpassword"
                  className={
                    formik.touched.confirmpassword && formik.errors.confirmpassword
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                  <small className="text-danger">
                    {formik.errors.confirmpassword}
                  </small>
                ) : null}
              </Formgroup>
              <br />
              <p className="text-center">
                Already have an account? login <Link to="/login">Here</Link>
              </p>
              <input
                type="submit"
                value="Sign up"
                style={Registerbutton}
                disabled={!formik.isValid}
                className="btn btn-primary btn-block reg"
              />
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </Container>
    </>
  );
}

export default Registerpage;
