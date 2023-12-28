import {pageNameType} from "@/types/page_name";

export function getKeyByValue(object:pageNameType, value:string): string {
    return Object.keys(object).find((key:any) => object[key] === value) || '';
}
export const timestampToDate = (date: Date | string) => {
    const year = new Date(date).getFullYear()
    const monthRaw = new Date(date).getMonth()
    const monthFormatted = monthRaw > 8 ? monthRaw + 1 : `0${monthRaw + 1}`
    const dayRaw = new Date(date).getDate()
    const day = dayRaw > 9 ? dayRaw : `0${dayRaw}`

    return `${day}.${monthFormatted}.${year}`
}