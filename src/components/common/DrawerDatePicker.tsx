import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

// components
import Button from "./Button";

// theme
import { theme } from "../../styles";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmit: (date: Date) => void;
};

const DrawerDatePicker = ({ open, setOpen, onSubmit }: Props) => {
  const [date, setDate] = useState<Date>(new Date("2000-01-01"));

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

  // backdrop
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

  const handleDateChange = (event: Event, date: Date) => {
    setDate(date);
  };

  useEffect(() => {
    if (open) handleSheetOpen();
    setOpen(false);
  }, [open]);

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
          value={date}
          display="spinner"
          mode="date"
          onChange={handleDateChange}
        />
        <Button
          variant="contained"
          title="Select"
          onPress={() => {
            onSubmit(date);
            handleSheetClose();
          }}
        />
      </BottomSheetView>
    </BottomSheetModal>
  );
};

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
