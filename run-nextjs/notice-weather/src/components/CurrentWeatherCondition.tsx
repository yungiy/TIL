import { getTime } from '@/utils/getTime'
import { Typography } from '@mui/material'

type Props = {
  timeZone: string
  conditionText: string
  conditionIcon: string
}

export default async function CurrentWeatherCondition({
  timeZone,
  conditionText,
}: Props) {
  const time = await getTime(timeZone)
  const timeText = `${time.hour}시 ${time.minute}분 ${time.seconds}초`

  return (
    <>
      <Typography variant='h6'>{timeText}이며  현재 날씨는 {conditionText} 입니다.</Typography>
    </>
  )
}