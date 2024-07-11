'use client'

import { FC, MouseEventHandler, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";

interface RSVPSubmitedComponentProp {
    guestName?: string
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const RSVPSubmitedComponent: FC<RSVPSubmitedComponentProp> = ({
    guestName = "John Doe",
    onClick
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Are you attending?</span>

                <div className="flex flex-col mt-8 text-center">
                    <p>Hi {guestName},</p>
                    <p>Thank you, You are already RSVP, do you want to change?</p>
                </div>
                <button className={cx(styles.buttonDefault)} onClick={onClick}>Change RSVP</button>
            </div>
        </>
    );
};
