import React from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";

// components
import { Screen } from "../../components/layout";
import { PasswordField, TextField } from "../../components/form";
import { Button } from "../../components/common";
import { theme } from "../../styles";

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
              <PasswordField
                name="password"
                label="Password"
                placeholder="6-20  words"
                successMsg="Valid password!"
              />
              <Button variant="contained" title="Submit" onPress={submitForm} />
              <Button
                variant="text"
                title="Submit"
                onPress={submitForm}
                textButtonSize={18}
                textButtonColor={theme.blueSemantic}
              />
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
