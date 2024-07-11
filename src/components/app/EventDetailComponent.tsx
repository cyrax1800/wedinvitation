'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";

interface EventDetailComponentProp {
}

export const EventDetailComponent: FC<EventDetailComponentProp> = ({
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Celebrate Our Love</span>

                <div className="flex flex-col md:grid md:grid-cols-2 mt-4 gap-4">
                    <div className={cx(styles.boxContainer, "items-center")}>
                        <span className={cx(styles.textTitle2)}>Holy Matrimony</span>
                        <span className="mt-12">Monday, 11 November 2024</span>
                        <span >11.00 WIB - 13.00 WIB</span>
                        <span className="mt-12">Wihara Ekayana Arama</span>
                        <span className="text-center">Jl. Mangga 2 No.8, RT.8/RW.8, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11510</span>
                        <a className={cx(styles.buttonDefault)} href="https://maps.app.goo.gl/yfa7jZDFP1TcnTAUA" target="_blank">
                            <div className="w-4 h-4 mr-2">
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#ffffff" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path>
                                </svg>
                            </div>
                            Get Direction
                        </a>
                    </div>


                    <div className={cx(styles.boxContainer, "items-center")}>
                        <span className={cx(styles.textTitle2)}>Reception</span>
                        <span className="mt-12">Monday, 11 November 2024</span>
                        <span >18.30 WIB - Selesai</span>
                        <span className="mt-12">Neo Soho 9th Floor</span>
                        <span className="text-center">Letjen S. Parman St No.28, RT.3/RW.5, South Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470</span>
                        <a className={cx(styles.buttonDefault)} href="https://maps.app.goo.gl/Aq4wx8QRnm1b3FE17" target="_blank">
                            <div className="w-4 h-4 mr-2">
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#ffffff" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path>
                                </svg>
                            </div>
                            Get Direction
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
