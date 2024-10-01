import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";

interface GiftComponentProp {
}

export const GiftComponent: FC<GiftComponentProp> = ({
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer, "bg-blue-50 mt-4 pb-4")}>
                <span className={cx(styles.textTitle)}>Wedding Gift</span>
                <span className="text-center mt-2">Your presence and prayers are the greatest wedding gifts we could ever ask for. However, if giving is a sign of love, we are happy to receive it.</span>

                <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-8 w-full justify-items-center">
                    <div className={cx(styles.boxContainerWhite, "items-center")}>
                        <span className={cx(styles.textTitle3)}>Michael</span>
                        <span className="mt-4 font-bold">BCA</span>
                        <span className={cx(styles.textNormal1Default, "flex", "items-center")}>
                            8280 2534 65
                            <div className="w-8 h-8 p-2" onClick={() => { navigator.clipboard.writeText("8280253465") }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#3b82f6" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
                            </div>
                        </span>
                    </div>

                    <div className={cx(styles.boxContainerWhite, "items-center")}>
                        <span className={cx(styles.textTitle3)}>Sonia Christina</span>
                        <span className="mt-4 font-bold">BCA</span>
                        <span className={cx(styles.textNormal1Default, "flex", "items-center")}>
                            3980 0198 28
                            <div className="w-8 h-8 p-2" onClick={() => { navigator.clipboard.writeText("3980019828") }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#3b82f6" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};
