import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";

interface GroomBrideComponentProp {
}

export const GroomBrideComponent: FC<GroomBrideComponentProp> = ({
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Groom and Bride</span>

                <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-16 w-full">
                    <div className={cx(styles.boxContainer, "items-center")}>
                        <span className={cx(styles.textTitle2)}>Michael</span>
                        <span className={cx(styles.textSecondary, "mt-4")}>Son of</span>
                        <span className="font-medium">Mr. Cater Chen</span>
                        <span className={cx(styles.textSecondary)}>And</span>
                        <span className="font-medium">Mrs. Lim Nyoek Kiauw</span>
                    </div>


                    <div className={cx(styles.boxContainer, "items-center")}>
                        <span className={cx(styles.textTitle2)}>Sonia Christina</span>
                        <span className={cx(styles.textSecondary, "mt-4")}>Daughter of</span>
                        <span className="font-medium">Mr. Gou teng tjiu</span>
                        <span className={cx(styles.textSecondary)}>And</span>
                        <span className="font-medium">Mrs. Hendrajati Suardja</span>
                    </div>
                </div>
            </div>
        </>
    );
};
