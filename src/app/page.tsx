
import { useSearchParams } from 'next/navigation'
import cx from "classnames";
import styles from "./App.module.scss";
import { tangerine } from "./font";
import { getData } from "@/libs/spreadsheet";
import { HomeComponent } from '@/components/app/HomeComponent';

interface SearchParamsProps {
  to?:string
  lang?:string
}

export default async function Home({ searchParams }:{searchParams:SearchParamsProps}) {
  console.log(searchParams)
  var name = searchParams.to ?? ""
  const res = await getData(name)
  if (name == "") {
    name = "Tamu"
  }
  console.log(res)

  return (
    <main className={cx(styles.textDefaultColor, tangerine.variable)}>
      <HomeComponent propName={name} propLang={searchParams.lang ?? "en"} propData={res}/>
    </main>
  );
}