import { FC } from "react";
import cx from "classnames";
import styles from "./Text.module.scss";

export type Renderable = JSX.Element | React.ReactNode | string | null;

export type BodySize = "b1" | "b2" | "b3";
export type HeadingSize = "h1" | "h2" | "h3";
export type TextSize = HeadingSize | BodySize | "small";

export type Align = "center" | "left" | "right";
export type Weight = "regular" | "bold";

export type Variant =
  | "highEmphasis"
  | "lowEmphasis"
  | "disabled"
  | "alert"
  | "activity"
  | "positive"
  | "invert";

interface TextProp {
  className?: string;
  variant?: Variant;
  weight?: Weight;
  size?: TextSize;
  align?: Align;
  italic?: boolean;
  maxLines?: number;
  children: Renderable;
}

const isHeading = (value: string): value is HeadingSize => {
  return ["h1", "h2", "h3"].includes(value);
};

const isSmall = (value: string): value is TextSize => {
  return value == "small";
};

export const Text: FC<TextProp> = ({
  className,
  variant = "highEmphasis",
  weight = "regular",
  size = "b1",
  align = "left",
  italic = false,
  maxLines = -1,
  children,
}) => {
  const variantClass = variant && styles[`variant_${variant}`];
  const sizeClass = size && styles[`size_${size}`]; // e.g. styles.size_h1
  const alignClass = align && styles[`align_${align}`];
  let fontWeightClass = weight && styles[`weight_${weight}`];
  if (isSmall(size)) {
    fontWeightClass = styles.weight_semibold;
  } else if (isHeading(size)) {
    fontWeightClass = styles.weight_bold;
  }

  let fontStyleClass;
  // class should be added when `italic` prop is explicitly set (if undefined don’t add class, just let it inherit)
  if (typeof italic === "boolean") {
    fontStyleClass = italic ? styles.italic : styles.normal;
  }

  let style = {};
  if (maxLines > -1) {
    style = {
      display: "-webkit-box",
      WebkitLineClamp: maxLines,
      lineClamp: maxLines,
      WebkitBoxOrient: "vertical",
      boxOrient: "vertical",
    };
  }

  return (
    <>
      <span
        className={cx(
          className,
          "font-inter",
          styles.text,
          variantClass,
          sizeClass,
          alignClass,
          fontWeightClass,
          fontStyleClass,
          italic && styles.italic,
          maxLines > -1 && "text-ellipsis overflow-y-hidden break-words",
          maxLines > -1 && styles.maxLinesInner
        )}
        style={style}
      >
        {children}
      </span>
    </>
  );
};
