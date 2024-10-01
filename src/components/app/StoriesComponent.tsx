import { FC, useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import React from "react";

interface StoriesComponentProp {
}

export const StoriesComponent: FC<StoriesComponentProp> = ({
}) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => setIsDesktop(e.matches));
    }, []);

    const data = [
        {
            date: "Late 2018",
            title: "We Met",
            description: "Michael met Sonia in Wihara Ekayana Arama, together serving in the same youth community. But we still not talk to each other much."
        },
        {
            date: "July 2022",
            title: "Our first deep conversation",
            description: "Michael had a little spark of attraction of Sonia and try to have small daily talk over chat and arrange to met and know each other more. But as we busy, the convo become less and less."
        },
        {
            date: "March 2023",
            title: "The Begining",
            description: "Michael asked Sonia to help and accompany him on his Eye Surgery. And time goes we talked more again each other and more closely on Dufan."
        }
        , {
            date: "20 Mei 2023",
            title: "We are in Relationship",
            description: "After knowing each other for sometimes and taking care of each other. We decided to be in relationship."
        }
        , {
            date: "28 April 2024",
            title: "He Proposed",
            description: "Michael decided to propose on same as her birthday. The day have much challanges as the situation is not stable. But it is success."
        }
    ]

    const mobileContent = () => {
        const content = data.map((value) => {
            return (
                <div key={value.date} className="flex flex-col items-center text-center py-5 pl-10 pr-10">
                    <span className="text-lg">{value.date}</span>
                    <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>{value.title}</span>
                    <p className="text-sm mt-2">{value.description}</p>
                </div>
            )
        })
        return content
    }

    const desktopContent = () => {
        const content = data.map((value, index) => {
            return (
                <>
                    {index % 2 == 1 && <div className="border-r border-blue-900"></div>}
                    <div key={value.date} className={cx("flex items-center border-blue-900", index % 2 == 0 ? "border-r" : "border-l")}>
                        {index % 2 == 1 && <div className="w-20 h-1 border-b-2 border-blue-900"></div>}
                        <div className={cx("flex flex-col items-center text-center py-10", index % 2 == 0 ? "pl-10 pr-2" : "pl-2 pr-10")}>
                            <span className="text-lg">{value.date}</span>
                            <span className={cx(styles.textTitle2, "text-blue-900 font-bold mt-1")}>{value.title}</span>
                            <p className="text-sm mt-2">{value.description}</p>
                        </div>
                        {index % 2 == 0 && <div className="w-20 h-1 border-b-2 border-blue-900"></div>}
                    </div>
                    {index % 2 == 0 && <div className="border-l border-blue-900"></div>}
                </>
            )
        })
        return content
    }

    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Our Love Stories</span>

                <span className="text-sm">A Little bit of our Story</span>

                <div className="flex flex-col mt-8 md:grid md:grid-cols-2 md:mt-8 md:mx-6">
                    {isDesktop ? desktopContent() : mobileContent()}
                </div>

            </div>
        </>
    );
};
