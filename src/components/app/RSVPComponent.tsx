'use client'

import { FC, MouseEventHandler, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";

interface RSVPComponentProp {
    guestName?: string
    isAttended?: boolean
    isHolyMatrimony?: boolean
    isReception?: boolean
    guestCount?: number
    onSubmit?: (isAttended: boolean, isHolyMatrimony: boolean, isReception: boolean, guestCount: number) => void;
}

export const RSVPComponent: FC<RSVPComponentProp> = ({
    guestName = "John Doe",
    isAttended = true,
    isHolyMatrimony = false,
    isReception = false,
    guestCount = 1,
    onSubmit
}) => {

    const [mIsAttended, setIsAttended] = useState<boolean>(isAttended);
    const [mIsHolyMatrimony, setIsHolyMatrimony] = useState<boolean>(isHolyMatrimony);
    const [mIsReception, setIsReception] = useState<boolean>(isReception);
    const [mGuestCount, setGuestCount] = useState<number>(guestCount);

    return (
        <>
            <div className={cx(styles.sectionContainer, "mt-[-10rem] z-10")}>
                <div className="flex flex-col bg-white p-8 rounded-lg shadow-xl">
                    <span className={cx(styles.textTitle1)}>Are you attending?</span>

                    <div className="flex flex-col mt-8 text-center">
                        <p>Hi <b>{guestName}</b>,</p>
                        <p>Please fill in the form below to RSVP</p>

                        <p>==============================</p>

                        <div>
                            <div className="flex gap-2" onClick={() => { if (!mIsAttended) setIsAttended(!mIsAttended) }} >
                                <input type="radio" id="yes" name="attend" value="true" checked={mIsAttended} readOnly />
                                <label>Yes, I will attend</label>
                            </div>
                            <div className="flex gap-2" onClick={() => { if (mIsAttended) setIsAttended(!mIsAttended) }} >
                                <input type="radio" id="no" name="attend" value="false" checked={!mIsAttended} readOnly />
                                <label>No, I will no be able to attend</label>
                            </div>
                        </div>

                        {
                            mIsAttended && (
                                <>
                                    <div className="mt-4">
                                        <label>Please choose the number of attendance</label>
                                        <select className="flex border-2 py-1 px-4 text-left"
                                            id="guest"
                                            name="guest"
                                            value={mGuestCount}
                                            onChange={(e) => {
                                                setGuestCount(Number(e.target.value));
                                            }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-start">Please check to rsvp event</p>
                                        <div>
                                            <div className="flex gap-2" onClick={() => { setIsHolyMatrimony(!mIsHolyMatrimony) }}>
                                                <input type="checkbox" id="holymatrimony" name="holymatrimony" value="holymatrimony" checked={mIsHolyMatrimony} readOnly />
                                                <label>Holy Matrimony</label>
                                            </div>
                                            <div className="flex gap-2" onClick={() => { setIsReception(!mIsReception) }}>
                                                <input type="checkbox" id="reception" name="reception" value="reception" checked={mIsReception} readOnly />
                                                <label>Reception</label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <button className={cx(styles.buttonDefault, "mt-4")} onClick={() => { onSubmit && onSubmit(mIsAttended, mIsHolyMatrimony, mIsReception, mGuestCount) }}>RSVP</button>
                </div>
            </div>
        </>
    );
};
