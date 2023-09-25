import dayjs from "dayjs"
import { releaseDay } from "shared"

export function printReleaseDay(): string {
  return `Release: ${releaseDay().format("YYYY/MM/DD")}`
}

export function now(): string {
  return `Now: ${dayjs().format("YYYY/MM/DD")}`
}
