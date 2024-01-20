import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text, Alert } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Formik } from "formik";
import * as Yup from "yup";

// components
import { Screen } from "../../components/layout";
import { Button } from "../../components/common";
import { PasswordField } from "../../components/form";

// styles
import { theme } from "../../styles";

// api
import { authApi } from "../../api/auth";

// hooks
import { useLoadingContext } from "../../hooks";

const ResetPassword = ({ navigation, route }: any) => {
  const { toggleLoading } = useLoadingContext();
  const { otp, email } = route.params;

  const ValidationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords do not match!"
    ),
  });

  const handleResetPassword = async (password: string) => {
    toggleLoading(true);
    const success = await authApi.resetPassword(email, password, otp);

    if (success) {
      toggleLoading(false);
      Alert.alert("Your password has been reset. Please Login!");
      navigation.replace("Login");
    } else {
      toggleLoading(false);
      Alert.alert("Please try again!");
      navigation.replace("ForgotPassword");
    }
  };

  return (
    <Screen
      headerProps={{ title: "Reset Password", withBackButton: true }}
      screenStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <PageWrapper>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => handleResetPassword(values.password)}
        >
          {({ submitForm }) => (
            <>
              <PasswordField
                name="password"
                label="Password"
                placeholder="6-20 characters"
              />
              <PasswordField
                name="confirmPassword"
                label="Confirm Password"
                placeholder="6-20 characters"
              />
              <Button
                variant="contained"
                title={"Reset Password"}
                onPress={submitForm}
              />
            </>
          )}
        </Formik>
      </PageWrapper>
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {},
});

const PageWrapper = styled.View`
  width: 100%;
  height: 90%;
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
`;

export default ResetPassword;
