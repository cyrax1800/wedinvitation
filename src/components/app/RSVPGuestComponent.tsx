'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";

interface RSVPGuestComponentProp {
    guestName?: string
}

export const RSVPGuestComponent: FC<RSVPGuestComponentProp> = ({
    guestName = "John Doe",
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Are you attending?</span>

                <div className="flex flex-col mt-8 text-center">
                    <p>Hi {guestName},</p>
                    <p>Please use Link shared by Groom & Bride to RSVP.</p>
                </div>
            </div>
        </>
    );
};
