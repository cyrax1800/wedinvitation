'use server'

const id = "1-9esWZQl2G0jgkvI5X_g80pBZCZ_BdzmA3YsPf3kQvM"
import creds from "./secret-medium-428405-r7-93915cf96f6f.json"
import {
    google,
    sheets_v4,
    Auth,
} from 'googleapis';

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
];

const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
    credentials: creds,
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const client: sheets_v4.Sheets = google.sheets({
    version: 'v4',
    auth: auth,
    http2: true
});

export interface Attendance {
    canAttend: boolean | undefined,
    isHolyMatrimony: boolean,
    isReception: boolean,
    guestcount: number,
    rowIndex: number,
    rows: any[]
}

export interface WishesItem {
    name: string,
    wish: string,
}

export interface Data {
    wishes: WishesItem[],
    isGuest: boolean,
    attend: Attendance
}

export async function getData(to: String) {
    const lowered = to.toLowerCase()
    const split = lowered.split(" and ")
    const firstName = split[0]
    const lastName = (split.length > 1) ? split[1] : ""
    console.log(firstName + "+" + lastName)

    const hasName = to.length != 0
    const sheets = [
        "Wishes!A2:B300"
    ]
    if (hasName) {
        sheets.push("List Teman!A2:J300")
    }

    const batchResp = (await client.spreadsheets.values.batchGet({
        spreadsheetId: id,
        ranges: sheets,
        valueRenderOption: 'FORMULA'
    }));

    var attendRes: Attendance = {
        canAttend: undefined,
        isHolyMatrimony: false,
        isReception: false,
        guestcount: 1,
        rowIndex: 9999,
        rows: []
    }

    if (hasName) {
        batchResp.data.valueRanges!![1].values!!.forEach((e, index) => {
            if (e[1].toLowerCase() === firstName && e[2].toLowerCase() === lastName) {
                console.log(e[6] === "")
                attendRes.canAttend = e[6] === "" ? undefined : Boolean(e[6])
                attendRes.isHolyMatrimony = e[7] == '' ? false : e[7]
                attendRes.isReception = e[8] == '' ? false : e[8]
                attendRes.guestcount = (Number(e[9]) == 0) ? 1 : Number(e[9])
                attendRes.rowIndex = index
                attendRes.rows = e
                return
            }
        })
    }

    console.log(attendRes)

    return {
        wishes: getWishes(batchResp.data.valueRanges!![0]),
        isGuest: attendRes.rowIndex == 9999,
        attend: attendRes
    }
}

function getWishes(wishResponse: sheets_v4.Schema$ValueRange) {
    if (wishResponse.values == undefined) return []
    const wishesRes: WishesItem[] = wishResponse.values!!.map((value, index) => {
        return {
            name: value[0],
            wish: value[1]
        }
    })

    return wishesRes.reverse()
}

export async function submitWishes(name: string, wish: string) {
    const res = await client.spreadsheets.values.append({
        spreadsheetId: id,
        range: "Wishes!A2:B1000",
        insertDataOption: "INSERT_ROWS",
        valueInputOption: "RAW",
        requestBody: {
            values: [
                [name, wish]
            ]
        }
    })
    return res.status
}

export async function submitRSVP(
    isAttended: boolean,
    isHolyMatrimony: boolean,
    isReception: boolean,
    guestCount: number,
    attend: Attendance) {
    const row = attend.rows
    row[0] = Number(row[0])
    row[5] = Number(row[5])
    row[6] = isAttended
    row[7] = isHolyMatrimony
    row[8] = isReception
    row[9] = guestCount
    const res = await client.spreadsheets.values.update({
        spreadsheetId: id,
        range: `List Teman!A${attend.rowIndex + 2}`,
        valueInputOption: "RAW",
        requestBody: {
            values: [
                row
            ]
        }
    })
    return res.status
}