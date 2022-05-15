import React, { useMemo, useRef, useCallback, useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert, TextInput } from "react-native";

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

// theme
import { theme } from "../../styles";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => {};
  onSubmit: () => void;
};

function DrawerDatePicker({ open, setOpen, onSubmit }: Props) {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // callbacks
  const handleSheetOpen = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const handleSheetClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  useEffect(() => {
    if (open) handleSheetOpen();
    setOpen(false);
  }, [open]);

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
        <Button onPress={handleSheetClose} title="Close Modal" color="black" />
      </BottomSheetView>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "red",
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default DrawerDatePicker;
