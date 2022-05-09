import React, { useEffect, useCallback, useMemo, useRef } from "react";
import { View, Text, Button, StyleSheet, Alert, TextInput } from "react-native";
import { useLoadingContext } from "../../../hooks";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { theme } from "../../../styles";
import { Easing } from "react-native-reanimated";

const ProductDetail = () => {
  const { toggleLoading } = useLoadingContext();

  useEffect(() => {
    toggleLoading(true);

    setTimeout(() => {
      toggleLoading(false);
    }, 1500);
  }, []);

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        pressBehavior="close"
        opacity={0.3}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <Button
        onPress={handlePresentModalClose}
        title="Close Modal"
        color="black"
      />
      <BottomSheetModal
        enablePanDownToClose={true}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{ backgroundColor: theme.main }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Button
            onPress={handlePresentModalClose}
            title="Close Modal"
            color="black"
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  input: { height: 40, margin: 12, borderWidth: 1, padding: 10 },
});

export default ProductDetail;
