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
            <div className={cx(styles.sectionContainer, "relative pb-4", "bg-white")}>
                <span className={cx(styles.textTitle, "z-10")}>{dictionary.groomandbride[language]}</span>

                {/* <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-16 w-full"> */}
                <div className="flex flex-col mt-4 gap-2 w-full items-center z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:w-3/5">
                        <div className="md:w-52">
                            <Image className="object-contain h-auto rounded-md" src={"/michael2.jpg"} alt={""} sizes="100wv" width={256} height={192} unoptimized />
                        </div>

                        <div className={cx(styles.profileBoxContainer1)}>
                            <div className={cx(styles.textTitle2)}>Michael</div>
                            <div className={cx(styles.textSecondary, "mt-4")}>{dictionary.sonOf[language]}</div>
                            <div className={"font-medium"}>{dictionary.mr[language]} Cater Chen</div>
                            <div className={cx(styles.textSecondary)}>{dictionary.and[language]}</div>
                            <div className="font-medium">{dictionary.ms[language]} Lim Nyoek Kiauw</div>

                            <a className={cx(styles.textSecondary, "mt-4 flex justify-center md:justify-start")} href="https://www.instagram.com/michael._cheng" target="blank">
                                <div>
                                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                                    </svg>
                                </div> michael._cheng
                            </a>
                        </div>
                    </div>

                    <div className={cx(styles.textTitle)}>&</div>

                    <div className="flex flex-col md:flex-row-reverse md:items-center md:w-3/5 ">
                        <div className="md:w-52 w-full">
                            <Image className="object-contain h-auto rounded-md" src={"/sonia3.jpg"} alt={""} sizes="100wv" width={256} height={192} unoptimized />
                        </div>
                        <div className={cx(styles.profileBoxContainer2)}>
                            <div className={cx(styles.textTitle2)}>Sonia Christina</div>
                            <div className={cx(styles.textSecondary, "mt-4")}>{dictionary.daughterOf[language]}</div>
                            <div className="font-medium">{dictionary.mr[language]} Gou Teng Tjiu</div>
                            <div className={cx(styles.textSecondary)}>{dictionary.and[language]}</div>
                            <div className="font-medium">{dictionary.ms[language]} Hendrajati Suardja</div>

                            
                            <a className={cx(styles.textSecondary, "mt-4 flex justify-center md:justify-end")} href="https://www.instagram.com/sonialim89" target="blank">
                                <span>
                                    <svg fill="#000000" width="24px" height="24px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z" />
                                    </svg>
                                </span> sonialim89
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full h-auto">
                    <div className="left-0 top-0">
                        <Image className="object-contain h-auto rounded-md" src={"/rose-3.webp"} alt={""} sizes="100wv" width={256} height={192} unoptimized />
                    </div>
                </div>
                <div className="absolute w-full h-full">
                    <div className="absolute left-[-1rem] bottom-0">
                        <Image className="object-contain h-auto rounded-md" src={"/rose-4.webp"} alt={""} sizes="100wv" width={256} height={192} unoptimized />
                    </div>
                </div>
                <div className="absolute w-full h-1/2 overflow-hidden">
                    <div className="absolute right-[-2rem] bottom-0">
                        <Image className="object-contain h-auto rounded-md" src={"/rose-white-2.webp"} alt={""} sizes="100wv" width={256} height={192} unoptimized />
                    </div>
                </div>
            </div>
        </>
    );
};
