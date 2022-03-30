// 日期格式化函数
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss'

export const formatUtcString = (
  utc: string,
  format: string = DATE_TIME_FORMAT
) => {
  return dayjs.utc(utc).format(format)
}
