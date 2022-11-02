import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text } from "react-native";
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
import { TextField } from "../../components/form";

// styles
import { theme } from "../../styles";

// api
import { authApi } from "../../api/auth";

// hooks
import { useLoadingContext } from "../../hooks";

const ForgotPassword = ({ navigation }: any) => {
  const { toggleLoading } = useLoadingContext();
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const ValidationSchema = Yup.object().shape({
    email: Yup.string().email("Please insert a valid email address!"),
  });

  const handleSendEmail = async (email: string) => {
    toggleLoading(true);
    const success: any = await authApi.forgotPassword(email);
    if (success) {
      setEmailSent(true);
    }
    toggleLoading(false);
  };

  return (
    <Screen
      headerProps={{ title: "Forgot Password", withBackButton: true }}
      screenStyle={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {emailSent ? (
        <PageWrapper>
          <View>
            <InfoTextWrapper>
              <InfoText>
                We have sent the login code to your email, please check your
                mail to confirm your account.
              </InfoText>
            </InfoTextWrapper>
            <ConfirmationInputWrapper>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={4}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}
                  >
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </ConfirmationInputWrapper>

            <ResendButtonWrapper>
              <Button
                variant="text"
                title="Resend another code"
                textButtonSize={14}
                textButtonColor={theme.blueSemantic}
                onPress={() => navigation.navigate("ForgotPassword")}
              />
            </ResendButtonWrapper>
          </View>
          <Button
            variant="contained"
            title={"Confirm"}
            onPress={() => console.log("sss")}
          />
        </PageWrapper>
      ) : (
        <PageWrapper>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => handleSendEmail(values.email)}
          >
            {({ submitForm }) => (
              <>
                <TextField
                  name="email"
                  label="Email"
                  placeholder="abcdef@gmail.com"
                />
                <Button
                  variant="contained"
                  title={"Send Verification Code"}
                  onPress={submitForm}
                />
              </>
            )}
          </Formik>
        </PageWrapper>
      )}
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {},
  cell: {
    width: 44,
    height: 44,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.neutral3,
    textAlign: "center",
  },
  focusCell: {
    borderColor: theme.primary,
  },
});

const PageWrapper = styled.View`
  width: 100%;
  height: 90%;
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoTextWrapper = styled.View`
  padding: 0 30px;
  margin-bottom: 24px;
`;

const ConfirmationInputWrapper = styled.View`
  width: 240px;
  align-self: center;
`;

const ResendButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const InfoText = styled.Text`
  font-family: ${theme.fonts.regular};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export default ForgotPassword;
