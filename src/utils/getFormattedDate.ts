export const getFormattedDate = (date: string) => {
  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDay();
  return `${year}년 ${month}월 ${day}일`;
};
