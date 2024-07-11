import { FC } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";

interface StoriesComponentProp {
}

export const StoriesComponent: FC<StoriesComponentProp> = ({
}) => {
    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Our Love Stories</span>

                <span className="text-sm">A Little bit of our Story</span>

                <div className="flex flex-col md:grid md:grid-cols-2 mt-8 gap-10 mx-6">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-lg">Late 2018</span>
                        <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>We Met</span>
                        <p className="text-sm mt-2">Michael met Sonia in Wihara Ekayana Arama, together serving in the same youth community. But we still not talk to each other much.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <span className="text-lg">July 2022</span>
                        <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>Our first deep conversation</span>
                        <p className="text-sm mt-2">Michael had a little spark of attraction of Sonia and try to have small daily talk over chat and arrange to met and know each other more. But as we busy, the convo become less and less.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <span className="text-lg">March 2023</span>
                        <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>The Begining</span>
                        <p className="text-sm mt-2">Michael asked Sonia to help and accompany him on his Eye Surgery. And time goes we talked more again each other and more closely on Dufan.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <span className="text-lg">20 Mei 2023</span>
                        <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>We are in Relationship</span>
                        <p className="text-sm mt-2">After knowing each other for sometimes and taking care of each other. We decided to be in relationship.</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <span className="text-lg">28 April 2024</span>
                        <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>He Proposed</span>
                        <p className="text-sm mt-2">Michael decided to propose on same as her birthday. The day have much challanges as the situation is not stable. But it is success.</p>
                    </div>
                </div>
            </div>
        </>
    );
};
