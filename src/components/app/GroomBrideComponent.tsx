import { FC, useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";
import Image from 'next/image'

interface GroomBrideComponentProp {
    isDesktop: boolean
}

export const GroomBrideComponent: FC<GroomBrideComponentProp> = ({
    isDesktop
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Groom and Bride</span>

                {/* <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-16 w-full"> */}
                <div className="flex flex-col mt-4 gap-2 w-full items-center">
                    <div className="flex flex-col md:flex-row md:items-center md:w-3/5">
                        <div className="md:w-52">
                            <Image className="object-contain h-auto rounded-md" src={"/michael.jpg"} alt={""} sizes="100wv" width={256} height={192} />
                        </div>

                        <div className={cx(styles.profileBoxContainer1)}>
                            <div className={cx(styles.textTitle2)}>Michael</div>
                            <div className={cx(styles.textSecondary, "mt-4")}>Son of</div>
                            <div className={"font-medium"}>Mr. Cater Chen</div>
                            <div className={cx(styles.textSecondary)}>And</div>
                            <div className="font-medium">Mrs. Lim Nyoek Kiauw</div>
                        </div>
                    </div>

                    <div className={cx(styles.textTitle)}>&</div>

                    <div className="flex flex-col md:flex-row-reverse md:items-center md:w-3/5 ">
                        <div className="md:w-52">
                            <Image className="object-contain h-auto rounded-md" src={"/sonia.jpg"} alt={""} sizes="100wv" width={256} height={192} />
                        </div>
                        <div className={cx(styles.profileBoxContainer2)}>
                            <div className={cx(styles.textTitle2)}>Sonia Christina</div>
                            <div className={cx(styles.textSecondary, "mt-4")}>Daughter of</div>
                            <div className="font-medium">Mr. Gou teng tjiu</div>
                            <div className={cx(styles.textSecondary)}>And</div>
                            <div className="font-medium">Mrs. Hendrajati Suardja</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
