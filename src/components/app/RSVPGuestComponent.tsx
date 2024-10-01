'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";

interface RSVPGuestComponentProp {
    guestName?: string
}

export const RSVPGuestComponent: FC<RSVPGuestComponentProp> = ({
    guestName = "John Doe",
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer, "mt-[-10rem] z-10")}>
                <div className="flex flex-col bg-white p-8 rounded-lg shadow-xl">
                    <span className={cx(styles.textTitle)}>Are you attending?</span>

                    <div className="flex flex-col mt-8 text-center">
                        <p>Hi <b>{guestName}</b>,</p>
                        <p>Please use Link shared by Groom & Bride to RSVP.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
