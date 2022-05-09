import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// navigation
import RootNavigation from "./src/navigation";

// context
import { LoadingProvider } from "./src/context";

// utils
import { loadFonts } from "./src/utils";

// redux
import { persistor, store } from "./src/redux/store";

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
        <LoadingProvider>
          <BottomSheetModalProvider>
            <RootNavigation />
          </BottomSheetModalProvider>
        </LoadingProvider>
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
