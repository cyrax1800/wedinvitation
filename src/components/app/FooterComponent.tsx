import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";

interface FooterComponentProp {
}

export const FooterComponent: FC<FooterComponentProp> = ({
}) => {
    
    return (
        <>
            <div className={cx(styles.footerContainer)}>
                <span className={cx(styles.textNormal1Default)}>Thank you</span>
                <span className={cx(styles.textTitle, "mt-2")}>Michael & Sonia</span>
                <span className="text-lg md:text-2xl mt-4">#MIraclewithSonia</span>

                <span className="w-full py-4 md:py-8 bg-blue-900 text-white text-center mt-8">
                    Copyright 2024 #MIraclewithSonia
                </span>
            </div>
        </>
    );
};
