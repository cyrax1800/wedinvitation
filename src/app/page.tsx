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
  GalleryComponent,
  RSVPGuestComponent
} from "@/components/app"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import cx from "classnames";
import styles from "./App.module.scss";
import landingStyles from "./../components/app/Landing.module.scss";
import { tangerine } from "./font";
import { Data, getData, submitRSVP, submitWishes } from "@/libs/spreadsheet";
import { SnackbarWrapper } from "@/components/snackbar/SnackbarWrapper";
import { SnackbarProps } from "@/components/snackbar";

export default function Home() {
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [snackBarProp, setSnackbarProp] = useState<SnackbarProps>({
    type: "general",
    id: "",
    textContent: ""
  });
  const [name, setName] = useState("Tamu")

  const [data, setData] = useState<Data>({
    wishes: [],
    isGuest: false,
    attend: {
      canAttend: undefined,
      isHolyMatrimony: false,
      isReception: false,
      guestcount: 0,
      rowIndex: 9999,
      rows: []
    }
  })

  useEffect(() => {
    const name = searchParams.get('to') ?? "Tamu"
    setName(name)

    const caller = async () => {
      const res = await getData(name)
      setIsEditable(res.attend.canAttend == null)
      setData(res)
    }
    caller()
  }, [])

  useEffect(() => {
    var delaySnackbar = setInterval(() => {
      setSnackbarProp({
        type: "general",
        id: "",
        textContent: ""
      })
      clearInterval(delaySnackbar);
    }, 3000)

    return () => {
      clearInterval(delaySnackbar);
    }

  }, [snackBarProp]);

  const submitWishesCaller = async (name: string, wish: string) => {
    const res = await submitWishes(name, wish)
    if (res == 200) {
      const newData = { ...data }
      newData.wishes = [{ name, wish }, ...data.wishes]
      setData(newData)

      setSnackbarProp({
        type: "success",
        id: "",
        textContent: "Success, Thank you"
      })
    } else {
      setSnackbarProp({
        type: "error",
        id: "",
        textContent: "Please try again."
      })
    }
  }

  const submitRSVPCaller = async (
    isAttended: boolean,
    isHolyMatrimony: boolean,
    isReception: boolean,
    guestCount: number) => {
    const res = await submitRSVP(
      isAttended,
      isHolyMatrimony,
      isReception,
      guestCount,
      data.attend,
    )

    if (res == 200) {
      const newData = { ...data }
      newData.attend.canAttend = isAttended
      newData.attend.isHolyMatrimony = isHolyMatrimony
      newData.attend.isReception = isReception
      newData.attend.guestcount = guestCount
      setData(newData)
      setSnackbarProp({
        type: "success",
        id: "",
        textContent: "Success, Thank you"
      })
    } else {
      setSnackbarProp({
        type: "error",
        id: "",
        textContent: "Please try again."
      })
    }
  }

  return (
    <main className={cx(styles.textDefaultColor, tangerine.variable)}>
      <div className={cx("flex flex-col", !isOpen ? "h-screen overflow-hidden" : "")}>
        {/* {isOpen &&
          <>
            <audio src="/theme.mp3" autoPlay loop />
          </>
        } */}
        <HeaderComponent />
        <GroomBrideComponent />
        <EventDetailComponent />
        {/* <StoriesComponent /> */}
        <GiftComponent />
        {
          (!data.isGuest && isEditable) && (<RSVPComponent
            guestName={name}
            isAttended={data.attend.canAttend ?? true}
            isHolyMatrimony={data.attend.isHolyMatrimony}
            isReception={data.attend.isReception}
            guestCount={data.attend.guestcount}
            onSubmit={(
              isAttended,
              isHolyMatrimony,
              isReception,
              guestCount
            ) => {
              console.log("RSVP Submit")
              submitRSVPCaller(isAttended,
                isHolyMatrimony,
                isReception,
                guestCount)
            }} />)
        }
        {
          (!data.isGuest && data.attend.canAttend !== undefined && !isEditable) && (<RSVPSubmitedComponent guestName={name} onClick={() => {
            setIsEditable(true)
          }} />)
        }

        {
          (data.isGuest) && (
            <RSVPGuestComponent guestName={name} />
          )
        }

        <WishesComponent wishes={data?.wishes ?? []} guestName={name} onSubmit={(name, wishes) => {
          console.log("Wishes Submited")
          submitWishesCaller(name, wishes)
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

      {snackBarProp.textContent &&
        <SnackbarWrapper type={snackBarProp.type} id={snackBarProp.id} textContent={snackBarProp.textContent} />
      }

    </main>
  );
}