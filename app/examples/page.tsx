import { styled } from "@pigment-css/react";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

const Day = styled.div({
  variants: [
    {
      props: { day: "today" },
      style: {
        backgroundColor: "red",
      },
    },
    {
      props: { day: "yesterday" },
      style: {
        backgroundColor: "blue",
      },
    },
  ],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  borderRadius: "4px",
});

export default function Calendar() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = 2024;
  const month = 1;
  const days = 31;
  const day = 23;

  return (
    <CalendarContainer>
      {months[month - 1]} {year}
      {Array.from({ length: days }, (_, index) => (
        <Day
          key={index}
          day={
            index + 1 === day
              ? "today"
              : index + 1 === day - 1
              ? "yesterday"
              : undefined
          }
        >
          {index + 1}
        </Day>
      ))}
    </CalendarContainer>
  );
}
