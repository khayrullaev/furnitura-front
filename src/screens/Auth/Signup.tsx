import React from "react";
import styled from "styled-components/native";
import { Alert, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

// api
import { authApi } from "../../api/auth";

// components
import { Screen } from "../../components/layout";
import { PasswordField, TextField } from "../../components/form";
import { Button } from "../../components/common";

// context
import { useLoadingContext } from "../../hooks";

const Signup = ({ navigation }: any) => {
  const { toggleLoading } = useLoadingContext();

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Please insert a valid email address!"),
    password: Yup.string().required("Password is required!"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords do not match!"
    ),
  });

  const handleSignup = async (values: any) => {
    toggleLoading(true);
    const success: any = await authApi.signup({
      ...values,
    });

    if (success) {
      Alert.alert(
        "Singup",
        "Email has been sent to the entered email. Please verify your email and proceed to login!"
      );
      navigation.navigate("Login");
    } else {
      Alert.alert(
        "Singup",
        "Error occured during your request. Please try again!"
      );
      navigation.navigate("Signup");
    }
    toggleLoading(false);
  };

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
        onSubmit={(values) => handleSignup(values)}
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
                placeholder="6-20 characters"
              />
              <PasswordField
                name="passwordConfirm"
                label="Repeat Password"
                placeholder="6-20 characters"
              />
            </View>
            <Button variant="contained" title="Sign up" onPress={submitForm} />
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
