import React from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";

// components
import { Screen } from "../../components/layout";
import { TextField } from "../../components/form";
import { Button } from "../../components/common";

const Login = () => {
  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Please insert a valid email address!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <Screen headerProps={{ title: "Login", withBackButton: false }}>
      <FormWrapper>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateOnBlur={true}
          validationSchema={ValidationSchema}
          onSubmit={(values) => console.log("Form values: ", values)}
        >
          {({ submitForm }) => (
            <>
              <TextField
                name="email"
                label="Email"
                placeholder="abcdef@gmail.com"
              />
              <TextField
                name="password"
                label="Password"
                placeholder="6-20  words"
                successMsg="Valid password!"
              />
              <Button title="Submit" onPress={submitForm} />
            </>
          )}
        </Formik>
      </FormWrapper>
    </Screen>
  );
};

const FormWrapper = styled.View`
  width: 100%;
  padding: 24px;
`;

export default Login;
