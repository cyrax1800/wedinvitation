import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import { TimerContainer } from "../timer/TimerContainer";
import { tangerine } from "@/app/font";

interface HeaderProp {
}

export const HeaderComponent: FC<HeaderProp> = ({
}) => {

    return (
        <>
            <div className={cx(styles.headerContainer)}>
                <div className={cx(styles.headerOverlay)}>
                    <div className="flex flex-col items-center pt-8 w-full">
                        <div className={cx(tangerine.className, "text-8xl md:text-9xl")}>
                            MS
                        </div>
                        <span className="text-lg md:text-xl mt-8">
                            The Wedding Of
                        </span>
                        <span className={cx(styles.textTitle)}>
                            Michael & Sonia
                        </span>
                        <span className="text-lg md:text-xl mt-4">
                            11 November 2024
                        </span>

                        <TimerContainer
                            countDownDuration={new Date(2024, 10, 11, 0, 0, 0).getTime() - new Date().getTime()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
