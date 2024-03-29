import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { ProductDetail, StoreDetail, PaymentForm } from "../../screens";

const Stack = createNativeStackNavigator();

const routesConfig = [
  {
    name: "ProductDetail",
    component: ProductDetail,
    options: {},
  },
  {
    name: "StoreDetail",
    component: StoreDetail,
    options: {},
  },
  {
    name: "PaymentForm",
    component: PaymentForm,
    options: {},
  },
];

export const getMinorScreens = () => {
  const { Screen } = Stack;

  return routesConfig.map((route, index) => {
    return (
      <Screen
        key={index}
        name={route.name}
        component={route.component}
        options={route.options}
      />
    );
  });
};
