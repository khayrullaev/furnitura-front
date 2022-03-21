import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import RootNavigation from "./src/navigation/RootNavigation";

// utils
import { loadFonts } from "./src/utils";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) return null;
  return <RootNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
