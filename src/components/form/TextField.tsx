import React, { useState } from "react";
import { useField } from "formik";
import styled from "styled-components/native";

// styles
import { theme } from "../../styles";

type Props = {
  name: string;
  label?: string;
  successMsg?: string;
  placeholder?: string;
  disabled?: boolean;
};

const TextField = ({
  name,
  label,
  successMsg,
  placeholder,
  disabled,
}: Props) => {
  const [field, meta, helpers]: any = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrapper>
      <Label>{label ? label : "Label"}</Label>
      <Input
        value={field.value}
        keyboardType="default"
        onChangeText={helpers.setValue}
        placeholder={placeholder ? placeholder : "Placeholder"}
        autoCapitalize="none"
        autoCorrect={false}
        editable={!disabled}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        isFocused={isFocused}
      />
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

const Input = styled.TextInput<{ isFocused: boolean }>`
  width: 100%;
  height: 44px;
  border: 1px solid
    ${(props) => (props.isFocused ? theme.primary : theme.neutral3)};
  border-radius: 15px;
  padding: 10px 16px;
  margin-bottom: 8px;
`;

const Meta = styled.Text<{ type: "error" | "success" }>`
  font-family: ${theme.fonts.regular};
  font-size: 12px;
  line-height: 12px;
  padding-left: 4px;
  color: ${(props) =>
    props.type === "error" ? theme.redSemantic : theme.greenSemantic};
`;

export default TextField;
