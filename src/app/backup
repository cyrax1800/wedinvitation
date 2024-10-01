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
import Image from 'next/image'
import { dictionary } from "@/libs/language";

export default function Home() {
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [snackBarProp, setSnackbarProp] = useState<SnackbarProps>({
    type: "general",
    id: "",
    textContent: ""
  });
  const [snackBarTimeout, setSnackBarTimeout] = useState<NodeJS.Timeout | null>(null)
  const [name, setName] = useState("Tamu")
  const [language, setLanguage] = useState("en")

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

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {

    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => { setIsDesktop(e.matches) });

    const name = searchParams.get('to') ?? "Tamu"
    setName(name)

    setLanguage(searchParams.get('lang') ?? "en")

    const caller = async () => {
      const res = await getData(name)
      setIsEditable(res.attend.canAttend == null)
      setData(res)
    }
    caller()
  }, [])

  const resetSnackbar = () => {
    setSnackBarTimeout(setTimeout(() => {
      setSnackbarProp({
        type: "general",
        id: "",
        textContent: ""
      })
    }, 3000))
  }

  const clearTimeoutSnackbar = () => {
    if (snackBarTimeout != null) {
      setSnackbarProp({
        type: "general",
        id: "",
        textContent: ""
      })
      clearTimeout(snackBarTimeout as NodeJS.Timeout)
    }
  }

  const submitWishesCaller = async (name: string, wish: string) => {
    clearTimeoutSnackbar()
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
    resetSnackbar()
  }

  const submitRSVPCaller = async (
    isAttended: boolean,
    isHolyMatrimony: boolean,
    isReception: boolean,
    guestCount: number) => {
    clearTimeoutSnackbar()
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
      setIsEditable(false)
    } else {
      setSnackbarProp({
        type: "error",
        id: "",
        textContent: "Please try again."
      })
    }
    resetSnackbar()
  }

  // console.log(data, isEditable)
  return (
    <main className={cx(styles.textDefaultColor, tangerine.variable)}>
      <div className={cx("flex flex-col", !isOpen ? "h-screen overflow-hidden" : "")}>
        {isOpen &&
          <audio src="/theme.mp3" autoPlay loop />
        }
        <HeaderComponent language={language} />
        <GroomBrideComponent language={language} />
        <EventDetailComponent language={language} />
        {/* <StoriesComponent /> */}
        <div className="flex w-full h-[75vh]">
          <Image className="object-cover w-full h-full" src={"/rsvp_bg.webp"} alt={""} width={512} height={192} />
          <div className={cx(landingStyles.sectionOverlayRSVP)} />
        </div>

        {
          (!data.isGuest && isEditable) && (<RSVPComponent
            language={language}
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
          (!data.isGuest && data.attend.canAttend !== undefined && !isEditable) && (<RSVPSubmitedComponent
            language={language}
            guestName={name}
            onClick={() => {
              setIsEditable(true)
            }} />)
        }

        {
          (data.isGuest) && (
            <RSVPGuestComponent guestName={name} language={language} />
          )
        }

        <WishesComponent language={language} wishes={data?.wishes ?? []} guestName={name} onSubmit={(name, wishes) => {
          console.log("Wishes Submited")
          submitWishesCaller(name, wishes)
        }} />
        <GiftComponent language={language} />

        <GalleryComponent language={language} />

        <WatchYoutubeComponent language={language} />
        <FooterComponent />
      </div>
      {
        !isOpen && <div className="animate-in fade-in duration-500 flex justify-center bg-white w-full h-full fixed top-0 bottom-0 left-0 right-0 z-40">
          <div className={cx("flex flex-col self-center text-center", landingStyles.textNormal3Default)}>
            <span className={cx(landingStyles.textTitle)}>#SOmeonetoMichael</span>
            <span className={cx("mt-12", landingStyles.textNormal1Default)}>{dictionary.greetings[language]} <b className="text-blue-500">{name}</b>,</span>
            <span className="mt-4">{dictionary.invited[language]}</span>
            <span>{dictionary.weddingOf[language]}</span>
            <span className={cx(landingStyles.textTitle2, "mt-4")}>{dictionary.groombridename[language]}</span>
            <button className={cx(landingStyles.buttonDefault, "mt-8")} onClick={() => {
              setIsOpen(true)
            }}>{dictionary.open[language]}</button>
          </div>
        </div>
      }

      <div className="fixed top-2 right-2 z-50">
        <select className="flex border-2 py-1 px-4 text-left"
          id="language"
          name="language"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}>
          <option value="en">English</option>
          <option value="id">Bahasa</option>
        </select>
      </div>

      {snackBarProp.textContent &&
        <SnackbarWrapper type={snackBarProp.type} id={snackBarProp.id} textContent={snackBarProp.textContent} />
      }

    </main>
  );
}