'use client'

import { FC, MouseEventHandler, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";
import { dictionary } from "@/libs/language";

interface RSVPSubmitedComponentProp {
    language: string
    guestName?: string
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const RSVPSubmitedComponent: FC<RSVPSubmitedComponentProp> = ({
    language,
    guestName = "John Doe",
    onClick
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer, "mt-[-10rem] z-10")}>
                <div className="flex flex-col bg-white p-8 rounded-lg shadow-xl">
                    <span className={cx(styles.textTitle1, "text-center")}>{dictionary.attendingQuestion[language]}</span>

                    <div className="flex flex-col mt-8 text-center">
                        <p>{dictionary.greetings[language]} {guestName},</p>
                        <p>{dictionary.thankYouRSVP[language]}</p>
                    </div>
                    <button className={cx(styles.buttonDefault)} onClick={onClick}>{dictionary.changeRSVP[language]}</button>
                </div>
            </div>
        </>
    );
};
