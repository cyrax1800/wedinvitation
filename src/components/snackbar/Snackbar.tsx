import React, { FC, MouseEventHandler, useContext } from "react";
import cx from "classnames";
import styles from "./Snackbar.module.scss";

export type Renderable = JSX.Element | string | null;

export type SnackbarType = "general" | "success" | "error";

export interface SnackbarProps {
  type: SnackbarType;
  id: string;
  textContent: Renderable;
}

export const Snackbar: FC<SnackbarProps> = (
  {
    type,
    id,
    textContent,
  }
) => {
  return (
    <>
      <div
        className={cx(
          styles.snackbar,
          styles.enter,
          styles[`type_${type}`]
        )}
      >
        <div className={styles.text_content}>
          {textContent}
        </div>
      </div>
    </>
  );
};
