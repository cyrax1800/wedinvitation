'use client'

import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import { YoutubeLazyLoadComponent } from "./YoutubeLazyLoad";

interface WatchYoutubeProp {
}

export const WatchYoutubeComponent: FC<WatchYoutubeProp> = ({
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle1)}>Watch us getting Married Live!</span>

                <div className={cx(styles.iframeContainer, "mt-4")}>
                    <YoutubeLazyLoadComponent youtubeId="2pQKqQ9sG50" />
                </div>
            </div>
        </>
    );
};