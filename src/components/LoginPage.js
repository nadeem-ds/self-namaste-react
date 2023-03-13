import React from "react";
import { Formik, Form, useFormik } from "formik";
const LoginPage = () => {
  console.log("this is formik page form");

  const { values, handleBlur, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      pas: "",
    },
  });

  //   console.log(formik);
  console.log(values);

  const formSubmit = () => {
    return alert("form sumitted");
  };
  return (
    <div>
      <h1>This is login page</h1>
      <h2>This is formik page</h2>
      {/* <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => {
        
        }}
      </Formik> */}
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />

        <input
          type="number"
          id="age"
          placeholder="Age"
          value={values.age}
          onChange={handleChange}
        />
        <input
          type="text"
          id="pas"
          placeholder="Password"
          value={values.pas}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          id="password"
          placeholder="Password"
          value={formik.values.Password}
          onChange={formik.handleChange}
        /> */}
        {/* <input
          type="text"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formik.values.ConfirmPassword}
          onChange={formik.handleChange}
        /> */}
        <button type="submit">login</button>
      </form>

      <div>
        <h1>Your name is: {values.name}</h1>
        <h1>Your email is :{values.email}</h1>
        <h1>Your age is: {values.age}</h1>
        <h1>Your password is :{values.pas}</h1>
      </div>
    </div>
  );
};

export default LoginPage;
