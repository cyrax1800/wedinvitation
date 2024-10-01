import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import { TimerContainer } from "../timer/TimerContainer";
import { TimerContainer2 } from "../timer/TimerContainer2";
import { tangerine } from "@/app/font";
import Image from 'next/image'
import React from "react";

interface HeaderProp {
}

export const HeaderComponent: FC<HeaderProp> = ({
}) => {

    return (
        <>
            <div className={cx(styles.headerContainer)}>
                <div className={cx(styles.headerOverlay)}>
                    <div className={cx("flex flex-col items-center pt-8 w-full", styles.headerContent)}>
                        <div className="w-32 md:w-48">
                            <Image className="object-contain h-auto" src={"/logo3.png"} alt={""} sizes="100wv" width={192} height={192} />
                        </div>
                        {/* <div className={cx(tangerine.className, "text-8xl md:text-9xl mt-12")}>
                            MS
                        </div> */}
                        <span className="text-lg md:text-xl mt-8">
                            The Wedding Of
                        </span>
                        <span className={cx(styles.textTitle, "mt-4")}>
                            Michael & Sonia
                        </span>
                        <span className="text-lg md:text-xl mt-4">
                            11 November 2024
                        </span>
                    </div>

                    <div className="flex flex-col w-full flex-1 justify-end items-center">
                        <TimerContainer2
                            countDownDuration={new Date(2024, 10, 11, 0, 0, 0).getTime() - new Date().getTime()}
                        />
                        <div className="w-12 h-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
