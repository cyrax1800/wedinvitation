"use client"

import {
  HeaderComponent,
  GroomBrideComponent,
  EventDetailComponent,
  StoriesComponent,
  GiftComponent,
  RSVPSubmitedComponent,
  RSVPComponent,
  WishesComponent,
  FooterComponent,
  WatchYoutubeComponent,
  GalleryComponent
} from "@/components/app"
import { useState } from "react";
import cx from "classnames";
import styles from "./App.module.scss";
import landingStyles from "./../components/app/Landing.module.scss";
import { tangerine } from "./font";

export default function Home() {
  const [isRSVP, setIsRSVP] = useState<boolean>(false);
  const name = "John Doe"

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <main className={cx(styles.textDefaultColor, tangerine.variable)}>
      <div className={cx("flex flex-col", !isOpen ? "h-screen overflow-hidden" : "")}>
        {isOpen &&
          <>
            <audio src="/theme.mp3" autoPlay loop/>
          </>
        }
        <HeaderComponent />
        <GroomBrideComponent />
        <EventDetailComponent />
        <StoriesComponent />
        <GiftComponent />
        {
          !isRSVP && (<RSVPComponent
            onSubmit={(
              isAttended,
              isHolyMatrimony,
              isReception,
              guestCount
            ) => {
              setIsRSVP(true)
              console.log("RSVP Submit")
            }} />)
        }
        {
          isRSVP && (<RSVPSubmitedComponent onClick={() => {
            setIsRSVP(false)
          }} />)
        }

        <WishesComponent onSubmit={(name, wishes) => {
          console.log("Wishes Submited")
        }} />

        <GalleryComponent />

        <WatchYoutubeComponent />
        <FooterComponent />
      </div>
      {
        !isOpen && <div className="animate-in fade-in duration-500 flex justify-center bg-white w-full h-full fixed top-0 bottom-0 left-0 right-0">
          <div className={cx("flex flex-col self-center text-center", landingStyles.textNormal3Default)}>
            <span className={cx(landingStyles.textTitle)}>MiracleWithSonia</span>
            <span className={cx("mt-12", landingStyles.textNormal1Default)}>Dear, <b className="text-blue-900">{name}</b></span>
            <span className="mt-4">You Are Invited!</span>
            <span>The Wedding of</span>
            <span className={cx(landingStyles.textTitle2)}>Michael and Sonia</span>
            <button className={cx(landingStyles.buttonDefault, "mt-8")} onClick={() => {
              setIsOpen(true)
            }}>Open</button>
          </div>
        </div>
      }

    </main>
  );
}
