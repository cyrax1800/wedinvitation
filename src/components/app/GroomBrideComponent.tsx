import { FC, useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";
import Image from 'next/image'
import { dictionary } from "@/libs/language";

interface GroomBrideComponentProp {
    language: string
}

export const GroomBrideComponent: FC<GroomBrideComponentProp> = ({
    language
}) => {

    return (
        <>
            <div className={cx(styles.sectionContainer, "relative")}>
                <span className={cx(styles.textTitle, "z-10")}>{dictionary.groomandbride[language]}</span>

                {/* <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-16 w-full"> */}
                <div className="flex flex-col mt-4 gap-2 w-full items-center z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:w-3/5">
                        <div className="md:w-52">
                            <Image className="object-contain h-auto rounded-md" src={"/michael2.jpg"} alt={""} sizes="100wv" width={256} height={192} unoptimized/>
                        </div>

                        <div className={cx(styles.profileBoxContainer1)}>
                            <div className={cx(styles.textTitle2)}>Michael</div>
                            <div className={cx(styles.textSecondary, "mt-4")}>{dictionary.sonOf[language]}</div>
                            <div className={"font-medium"}>{dictionary.mr[language]} Cater Chen</div>
                            <div className={cx(styles.textSecondary)}>{dictionary.and[language]}</div>
                            <div className="font-medium">{dictionary.ms[language]} Lim Nyoek Kiauw</div>
                        </div>
                    </div>

                    <div className={cx(styles.textTitle)}>&</div>

                    <div className="flex flex-col md:flex-row-reverse md:items-center md:w-3/5 ">
                        <div className="md:w-52 w-full">
                            <Image className="object-contain h-auto rounded-md" src={"/sonia3.jpg"} alt={""} sizes="100wv" width={256} height={192} unoptimized/>
                        </div>
                        <div className={cx(styles.profileBoxContainer2)}>
                            <div className={cx(styles.textTitle2)}>Sonia Christina</div>
                            <div className={cx(styles.textSecondary, "mt-4")}>{dictionary.daughterOf[language]}</div>
                            <div className="font-medium">{dictionary.mr[language]} Gou teng tjiu</div>
                            <div className={cx(styles.textSecondary)}>{dictionary.and[language]}</div>
                            <div className="font-medium">{dictionary.ms[language]} Hendrajati Suardja</div>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full h-auto">
                    <div className="left-0 top-0">
                        <Image className="object-contain h-auto rounded-md" src={"/rose-3.webp"} alt={""} sizes="100wv" width={256} height={192} unoptimized/>
                    </div>
                </div>
                <div className="absolute w-full h-full">
                    <div className="absolute left-[-1rem] bottom-0">
                        <Image className="object-contain h-auto rounded-md" src={"/rose-4.webp"} alt={""} sizes="100wv" width={256} height={192} unoptimized/>
                    </div>
                </div>
                <div className="absolute w-full h-1/2 overflow-hidden">
                    <div className="absolute right-[-2rem] bottom-0">
                        <Image className="object-contain h-auto rounded-md" src={"/rose-white-2.webp"} alt={""} sizes="100wv" width={256} height={192} unoptimized/>
                    </div>
                </div>
            </div>
        </>
    );
};
