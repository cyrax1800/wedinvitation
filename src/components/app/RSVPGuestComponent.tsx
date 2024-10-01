'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";
import { dictionary } from "@/libs/language";

interface RSVPGuestComponentProp {
    guestName?: string,
    language: string
}

export const RSVPGuestComponent: FC<RSVPGuestComponentProp> = ({
    guestName = "John Doe",
    language
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer, "bg-white")}>
                <div className="flex flex-col bg-white p-8 rounded-lg shadow-xl mt-[-10rem] z-10">
                    <span className={cx(styles.textTitle1, "text-center")}>{dictionary.attendingQuestion[language]}</span>

                    <div className="flex flex-col mt-8 text-center">
                        <p>{dictionary.greetings[language]} <b>{guestName}</b>,</p>
                        <p>{dictionary.useLinkRSVP[language]}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
