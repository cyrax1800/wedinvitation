'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import Image from 'next/image'
import React from "react";
import { dictionary } from "@/libs/language";

interface GalleryComponentProp {
    language: string
}

export const GalleryComponent: FC<GalleryComponentProp> = ({
    language
}) => {
    const totalItem = 22;

    const content = () => {
        let content = []
        for (let i = 1; i <= totalItem; i++) {
            content.push(
                <div key={i} className="w-full h-auto">
                    <Image className="object-contain h-auto" src={"/image_" + i + ".webp"} alt={""} width={512} height={512} quality={70} />
                </div>
            )
        }
        return content
    }
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle, "text-center")}>{dictionary.oursMemories[language]}</span>

                <div className={cx(styles.gridContainer)}>
                    {content()}
                </div>
            </div>
        </>
    );
};
