import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// components
import { Screen } from "../../components/layout";
import { PasswordField, TextField } from "../../components/form";
import { Button } from "../../components/common";

const Signup = ({ navigation }: any) => {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Please insert a valid email address!"),
    password: Yup.string().required("Password is required!"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords do not match!"
    ),
  });

  return (
    <Screen
      headerProps={{ title: "Sign up", withBackButton: true }}
      screenStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={ValidationSchema}
        validateOnBlur={true}
        onSubmit={(values) => navigation.navigate("SignupInfo", { ...values })}
      >
        {({ submitForm }) => (
          <FormWrapper>
            <View>
              <TextField name="name" label="Name" placeholder="John Doe" />
              <TextField
                name="email"
                label="Email"
                placeholder="abcdef@gmail.com"
              />
              <PasswordField
                name="password"
                label="Password"
                placeholder="6-20  words"
              />
              <PasswordField
                name="passwordConfirm"
                label="Repeat Password"
                placeholder="6-20  words"
              />
            </View>
            <Button variant="contained" title="Next" onPress={submitForm} />
          </FormWrapper>
        )}
      </Formik>
    </Screen>
  );
};

const FormWrapper = styled.View`
  width: 100%;
  height: 90%;
  padding: 24px 24px 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Signup;
