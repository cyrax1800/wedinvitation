'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import { YoutubeLazyLoadComponent } from "./YoutubeLazyLoad";
import { dictionary } from "@/libs/language";
import React from "react";

interface WatchYoutubeProp {
    language: string
}

export const WatchYoutubeComponent: FC<WatchYoutubeProp> = ({
    language
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle1, "text-center")}>{dictionary.liveStream[language]}</span>

                <div className={cx(styles.iframeContainer, "mt-4")}>
                    <YoutubeLazyLoadComponent youtubeId="2pQKqQ9sG50" />
                </div>
            </div>
        </>
    );
};
