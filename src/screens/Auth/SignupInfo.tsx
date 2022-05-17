import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Formik } from "formik";

// components
import { Screen } from "../../components/layout";
import {
  TextField,
  ImagePicker,
  DatePicker,
  PhoneNumberInput,
} from "../../components/form";
import { Button } from "../../components/common";

const SignupInfo = ({ navigation, route }: any) => {
  const handleSignup = (values: any) => {
    console.log(values);
  };

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
        initialValues={{
          address: "",
          birthdate: "",
          phone: "",
        }}
        onSubmit={(values) => handleSignup(values)}
      >
        {({ submitForm }) => (
          <FormWrapper>
            <View>
              <AvatarWrapper>
                <ImagePicker />
              </AvatarWrapper>
              <TextField
                name="address"
                label="Address"
                placeholder="123, Central Stree, LA"
              />
              <DatePicker
                name="birthdate"
                label="Date of birth"
                placeholder="01/01/1995"
              />
              <PhoneNumberInput
                name="phone"
                label="Phone number"
                placeholder="012-3456-7890"
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
  width: 100%;
  height: 90%;
  padding: 0px 24px 10px 24px;
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
