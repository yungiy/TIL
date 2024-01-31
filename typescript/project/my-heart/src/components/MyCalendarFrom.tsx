import { useState } from 'react';
import * as S from './style/CalendarStyle';
import dayjs from 'dayjs';

export default function MyCalendarForm() {

  const [today, setToday] = useState(new Date());

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = () => {
    setToday(today);
  };

  return (
      <S.StyleCalendar locale="kr" onChange={onChangeToday} value={today} formatDay={(locale, date) => dayjs(date).format("DD")} />
  );
}