import React, { useState } from "react";
import { Pressable } from "react-native";
import { useField } from "formik";
import styled from "styled-components/native";

// styles
import { theme } from "../../styles";

// components
import { EyeOn, EyeOff } from "../svgicons";

type Props = {
  name: string;
  label?: string;
  successMsg?: string;
  placeholder?: string;
  disabled?: boolean;
};

const PasswordField = ({
  name,
  label,
  successMsg,
  placeholder,
  disabled,
}: Props) => {
  const [field, meta, helpers]: any = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <Label>{label ? label : "Label"}</Label>
      <InputContainer isFocused={isFocused}>
        <Input
          value={field.value}
          keyboardType="default"
          onChangeText={helpers.setValue}
          placeholder={placeholder ? placeholder : "Placeholder"}
          autoCapitalize="none"
          autoCorrect={false}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          editable={!disabled}
          secureTextEntry={!visible}
        />
        <Pressable onPress={toggleVisible}>
          {visible ? <EyeOff /> : <EyeOn />}
        </Pressable>
      </InputContainer>

      {meta.touched && meta.error && <Meta type="error">{meta.error}</Meta>}
      {meta.touched && !meta.error && successMsg && (
        <Meta type="success">{successMsg} </Meta>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Label = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  line-height: 20px;
  color: ${theme.neutral2};
  margin-bottom: 12px;
`;

const InputContainer = styled.View<{ isFocused: boolean }>`
  width: 100%;
  height: 44px;
  border: 1px solid
    ${(props) => (props.isFocused ? theme.primary : theme.neutral3)};
  border-radius: 15px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 100%;
  padding: 10px 16px;
`;

const Meta = styled.Text<{ type: "error" | "success" }>`
  font-family: ${theme.fonts.regular};
  font-size: 12px;
  line-height: 12px;
  padding-left: 4px;
  color: ${(props) =>
    props.type === "error" ? theme.redSemantic : theme.greenSemantic};
`;

export default PasswordField;
