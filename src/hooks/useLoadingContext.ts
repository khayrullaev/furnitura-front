import { LoadingContext } from "../context";
import { useContext } from "react";

interface ContextProps {
  toggleLoading: (visible: boolean) => {};
}

export const useLoadingContext = () => {
  const context: ContextProps = useContext(LoadingContext);
  return context;
};
