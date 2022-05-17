import React, { useMemo, useRef, useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

// components
import { Button } from "../common";

// theme
import { theme } from "../../styles";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: () => void;
};

function DrawerDatePicker({ open, setOpen, onSubmit }: Props) {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["45%"], []);

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
        appearsOnIndex={0}
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
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ backgroundColor: theme.main }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <DateTimePicker
          value={new Date()}
          display="spinner"
          mode="date"
          // onChange={(event: any, date: any) => setValue(date)}
        />
        <Button
          variant="contained"
          title="Select"
          onPress={() => console.log("Submit")}
        />
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
    height: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default DrawerDatePicker;
