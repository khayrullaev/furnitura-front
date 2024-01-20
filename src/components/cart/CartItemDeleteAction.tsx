import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// styles
import { theme } from "../../styles";

function CartItemDeleteAction({ onPress }: any) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={28} color={"#ffffff"} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.redSemantic,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    borderRadius: 15,
  },
});

export default CartItemDeleteAction;
