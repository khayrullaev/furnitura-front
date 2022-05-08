import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-gesture-handler";

// navigation
import RootNavigation from "./src/navigation";

// utils
import { loadFonts } from "./src/utils";

// redux
import { persistor, store } from "./src/redux/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setLoaded(true);
    });
  }, []);

  console.log("App started");

  if (!loaded) return null;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BottomSheetModalProvider>
          <RootNavigation />
        </BottomSheetModalProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
