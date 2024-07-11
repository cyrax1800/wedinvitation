'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import Image from 'next/image'

interface GalleryComponentProp {
}

export const GalleryComponent: FC<GalleryComponentProp> = ({
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Captured Memories</span>

                <div className={cx(styles.gridContainer)}>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_7.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_1.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_4.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_5.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_6.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_8.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_2.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_3.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                    <div className="w-full h-auto">
                        <Image className="object-contain h-auto" src={"/image_9.webp"} alt={""} sizes="100wv" width={500} height={400}/>
                    </div>
                </div>
            </div>
        </>
    );
};
