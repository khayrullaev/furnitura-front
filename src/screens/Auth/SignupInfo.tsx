import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Formik } from "formik";

// components
import { Screen } from "../../components/layout";
import { PasswordField, TextField, ImagePicker } from "../../components/form";
import { Button } from "../../components/common";

const SignupInfo = ({ navigation, route }: any) => {
  return (
    <Screen
      headerProps={{ title: "Information", withBackButton: true }}
      screenStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Formik
        initialValues={
          {
            // name: route.params.name,
            // email: route.params.email,
            // password: route.params.password,
            // passwordConfirm: route.params.passwordConfirm,
          }
        }
        onSubmit={(values) => navigation.navigate("SignupInfo")}
      >
        {({ submitForm }) => (
          <FormWrapper>
            <View>
              <AvatarWrapper>
                <ImagePicker />
              </AvatarWrapper>
              <TextField
                name="name"
                label="Name"
                placeholder="John Doe"
                disabled={true}
              />
              <TextField
                name="email"
                label="Email"
                placeholder="abcdef@gmail.com"
                disabled={true}
              />
              <PasswordField
                name="password"
                label="Password"
                placeholder="6-20  words"
                disabled={true}
              />
              <PasswordField
                name="passwordConfirm"
                label="Repeat Password"
                placeholder="6-20  words"
                disabled={true}
              />
            </View>

            <Button variant="contained" title="Done" onPress={submitForm} />
          </FormWrapper>
        )}
      </Formik>
    </Screen>
  );
};

const FormWrapper = styled.View`
  border: 1px solid red;
  width: 100%;
  height: 90%;
  padding: 24px 24px 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AvatarWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignupInfo;
