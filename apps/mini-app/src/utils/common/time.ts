import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

export function convertToCurrentDate(day: Dayjs): Dayjs {
  const parsedTime = dayjs(day)

  const currentDate = dayjs()
  const updatedDate = currentDate
    .hour(parsedTime.hour())
    .minute(parsedTime.minute())
    .second(parsedTime.second())
    .millisecond(parsedTime.millisecond())

  return updatedDate
}

export function convertToBackendFormat(date: Dayjs): Dayjs {
  return dayjs
    .unix(0)
    .hour(date.hour())
    .minute(date.minute())
    .second(date.second())
    .millisecond(date.millisecond())
}

// 当天的秒数
export function timeToSeconds(time: Dayjs) {
  return time.hour() * 3600 + time.minute() * 60 + time.second()
}

// 分转小时
export function minutesToHours(minutes: number) {
  return Number(minutes / 60).toFixed(2)
}
