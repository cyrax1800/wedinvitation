import React, { FC, useCallback, useContext, useRef, useState } from "react";
import cx from "classnames";

import styles from "./Snackbar.module.scss";
import { Snackbar, SnackbarProps } from "./Snackbar";

export const SnackbarWrapper: FC<SnackbarProps> = ({
  type,
  id,
  textContent,
}) => {

  const timer = useRef<NodeJS.Timeout>();
  return (
    <div className={cx(styles.snackbar_wrapper)}>
      <Snackbar type={type} id={id} textContent={textContent}/>
    </div>
  );
};
