import React from "react";
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

const DatePicker = ({ name, label, placeholder, disabled }: Props) => {
  const [field, meta, helpers]: any = useField(name);
  const { setValue } = helpers;

  return (
    <Wrapper>
      <Label>{label ? label : "Date"}</Label>

      <InputBox>
        <Placeholder>{placeholder}</Placeholder>
      </InputBox>
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

const InputBox = styled.View`
  width: 100%;
  height: 44px;
  border: 1px solid ${theme.neutral3};
  border-radius: 15px;
  padding: 10px 16px;
  margin-bottom: 8px;
`;

const Placeholder = styled.Text`
  font-family: "Montserrat";
  font-size: 14px;
  line-height: 24px;
  color: ${theme.neutral3};
`;

export default DatePicker;
