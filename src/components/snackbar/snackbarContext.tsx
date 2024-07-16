'use client'

import React, { useRef, useState } from "react";
import { SnackbarProps } from "./Snackbar";

export type SnackBarContextType = {
  props?: SnackbarProps;
  isDisplayed: boolean;
  isRestart: boolean;
  displayMsg: (props: SnackbarProps) => void;
  onClose: () => void;
};

const SnackbarContext = React.createContext<SnackBarContextType | null>(null);

export type SnackbarProviderProps = {
  children: React.ReactNode;
};

export const SnackBarContextProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [props, setProps] = useState<SnackbarProps>();
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isRestart, setIsRestart] = useState(false);
  const timer = useRef<NodeJS.Timeout>();

  const displayHandler = (props: SnackbarProps) => {
    console.log("displayHandler")
    clearTimeout(timer.current);
    setIsRestart(true);

    setTimeout(() => {
      setIsRestart(false);
      setProps(props);
      setIsDisplayed(true);

      timer.current = setTimeout(() => {
        closeHandler();
      }, 3000); // close snackbar after 3 seconds
    }, 0);
  };
  const closeHandler = () => {
    console.log("closeHandler")
    clearTimeout(timer.current);
    setIsDisplayed(false);
  };
  return (
    <SnackbarContext.Provider
      value={{
        props,
        isDisplayed,
        isRestart,
        displayMsg: displayHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarContext;
