import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik } from "formik";

// components
import { PhoneNumberInput, TextField } from "../../../components/form";
import { Block, CommonText, Button } from "../../../components/common";
import { Screen } from "../../../components/layout";

// styles
import { theme } from "../../../styles/theme";

// utils
import { api } from "../../../utils";

// redux
import { resetCartData } from "../../../redux/slices/cartSlice";

function PaymentForm(props: any) {
  const dispatch = useDispatch();
  const { total, products } = props.route.params;
  const { navigation } = props;

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    phone: Yup.string().required("Phone number is required!"),
    zipcode: Yup.string().required("Zipcode is required!"),
    address: Yup.string().required("Address is required!"),
  });

  const handleSubmit = async (receiver: any) => {
    try {
      await api
        .post("/order", {
          products: products.map((el: any) => {
            return { productId: el._id, quantity: el.quantity };
          }),
          receiver,
        })
        .then((data) => {
          Alert.alert("Order", "Successfully placed your order!");
          dispatch(resetCartData());
          navigation.navigate("Home");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Screen headerProps={{ title: "PaymentForm" }}>
      <ScrollView>
        <View style={styles.container}>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              zipcode: "",
              address: "",
            }}
            validateOnBlur={true}
            validationSchema={ValidationSchema}
            onSubmit={(values) => handleSubmit({ ...values })}
          >
            {({ submitForm }) => (
              <>
                <TextField
                  name="name"
                  label="Receiver's name"
                  placeholder="John Doe"
                />
                <PhoneNumberInput
                  name="phone"
                  label="Phone number"
                  placeholder="123-456-789"
                />
                <TextField name="zipcode" label="Zipcode" placeholder="00000" />
                <TextField
                  name="address"
                  label="Address"
                  placeholder="Broadway St"
                />

                <Block
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={12}
                >
                  <CommonText size={16}>Product price</CommonText>
                  <CommonText size={15}>${total}</CommonText>
                </Block>
                <Block
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={12}
                >
                  <CommonText size={16}>Shipping price</CommonText>
                  <CommonText size={16}>$4</CommonText>
                </Block>
                <Block
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={12}
                >
                  <CommonText size={16} fontFamily={theme.fonts.bold}>
                    Total
                  </CommonText>
                  <CommonText fontFamily={theme.fonts.bold} size={22}>
                    ${total + 4}
                  </CommonText>
                </Block>
                <Button
                  title="Proceed to pay"
                  buttonStyle={styles.formButton}
                  variant="contained"
                  onPress={submitForm}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </Screen>
  );
}

export default PaymentForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  formButton: {
    marginTop: 18,
  },
});
