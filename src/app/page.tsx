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
  FooterComponent
} from "@/components/app"
import { useState } from "react";
import cx from "classnames";
import styles from "./App.module.scss";
import landingStyles from "./../components/app/Landing.module.scss";
import { tangerine } from "./font";

export default function Home() {
  const [isRSVP, setIsRSVP] = useState<boolean>(false);

  return (
    <main className={cx(styles.textDefaultColor, tangerine.variable)}>
      <div className="flex flex-col">
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
        <FooterComponent />
      </div>
    </main>
  );
}
