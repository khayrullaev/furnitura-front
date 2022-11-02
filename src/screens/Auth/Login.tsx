import React from "react";
import styled from "styled-components/native";
import { Formik } from "formik";
import * as Yup from "yup";

// hooks
import { useLoadingContext } from "../../hooks";

// api
// import { handleLogin } from "../../redux/slices/authSlice";
import { authApi } from "../../api/auth";

// components
import { Screen } from "../../components/layout";
import { PasswordField, TextField } from "../../components/form";
import { Button } from "../../components/common";

// styles
import { theme } from "../../styles";

const Login = ({ navigation }: any) => {
  const { toggleLoading } = useLoadingContext();

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Please insert a valid email address!"),
    password: Yup.string().required("Password is required!"),
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    toggleLoading(true);
    const isLoggedIn: any = await authApi.login(values.email, values.password);

    if (isLoggedIn) {
      navigation.replace("Main");
    }
    toggleLoading(false);
  };

  return (
    <Screen
      headerProps={{ title: "Login", withBackButton: false }}
      screenStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <FormWrapper>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validateOnBlur={true}
          validationSchema={ValidationSchema}
          onSubmit={(values) => handleSubmit(values)}
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
                placeholder="6-20 characters"
              />
              <ForgotButtonWrapper>
                <Button
                  variant="text"
                  title="Forgot your password?"
                  textButtonSize={14}
                  textButtonColor={theme.blueSemantic}
                  onPress={() => navigation.navigate("ForgotPassword")}
                />
              </ForgotButtonWrapper>
              <Button
                variant="contained"
                title="Sign in"
                onPress={submitForm}
              />
            </>
          )}
        </Formik>
      </FormWrapper>
      <SignupButtonWrapper>
        <Question>{`Don't have an account? `}</Question>
        <Button
          variant="text"
          title="Sign up"
          textButtonSize={18}
          textButtonColor={theme.primary}
          onPress={() => navigation.navigate("Signup")}
        />
      </SignupButtonWrapper>
    </Screen>
  );
};

const FormWrapper = styled.View`
  width: 100%;
  height: 90%;
  padding: 24px;
`;

const ForgotButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const Question = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  line-height: 18px;
  color: ${theme.neutral2};
`;

const SignupButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export default Login;
