import { styled } from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const StyleCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  padding: 10px;

  .react-calendar__navigation {
    display: flex;
    height: 30px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 30px;
  }

  .react-calendar__navigation button:disabled {
    background-color: #eeeeee;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #eeeeee;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: #eeeeee;
    border-radius: 5px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #eeeeee;
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: #9e9e9e;
    border-radius: 10px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #9e9e9e;
  }
  /* 일정 있는 날 표시 점 */
  .dot {
    height: 8px;
    width: 8px;
    background-color: #51f8c4;
    border-radius: 50%;
    text-align: center;
    margin-top: 3px;
  }
`;
