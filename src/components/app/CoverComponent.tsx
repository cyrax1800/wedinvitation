import { FC } from "react";
import cx from "classnames";
import landingStyles from "./Landing.module.scss";
import React from "react";
import { dictionary } from "@/libs/language";

interface CoverComponentProp {
    language: string
    name: string
    isOpenCallback: () => void
}

export const CoverComponent: FC<CoverComponentProp> = ({
    language,
    name,
    isOpenCallback
}) => {

    return (
        <>
            <div className={cx(landingStyles.coverContainer)}>
                {/* <div className={cx(landingStyles.coverContainerOverlay)}>
                    <div className={cx("flex flex-col items-center text-center mt-12", landingStyles.textNormal3Default)}>
                        <span className={cx(landingStyles.textTitle)}>#SOmeonetoMichael</span>
                        <span className={cx("mt-12", landingStyles.textNormal1Default)}>{dictionary.greetings[language]} <b className="text-blue-200">{name}</b>,</span>
                        <span className="mt-4">{dictionary.invited[language]}</span>
                        <span>{dictionary.weddingOf[language]}</span>
                        <span className={cx(landingStyles.textTitle2, "mt-4")}>{dictionary.groombridename[language]}</span>

                    </div>
                    <div className="bottom-0 absolute self-center pb-12">
                        <button className={cx(landingStyles.buttonDefault, "mt-8 items-end")} onClick={() => {
                            isOpenCallback()
                        }}>{dictionary.open[language]}</button>
                    </div>
                </div> */}
                <div className={cx(landingStyles.coverContainerOverlay)}>
                    <div className={cx("flex flex-col w-full items-center justify-end text-center mb-12", landingStyles.textNormal3Default)}>
                        <span className={cx(landingStyles.textTitle)}>#SOmeonetoMichael</span>
                        <span className={cx("mt-12", landingStyles.textNormal1Default)}>{dictionary.greetings[language]} <b className="text-blue-200">{name}</b>,</span>
                        <span className="mt-4">{dictionary.invited[language]}</span>
                        <span>{dictionary.weddingOf[language]}</span>
                        <span className={cx(landingStyles.textTitle2, "mt-4")}>{dictionary.groombridename[language]}</span>

                        <button className={cx(landingStyles.buttonDefault, "mt-8 items-end")} onClick={() => {
                            isOpenCallback()
                        }}>{dictionary.open[language]}</button>
                    </div>
                </div>
            </div>
        </>
    );
};
