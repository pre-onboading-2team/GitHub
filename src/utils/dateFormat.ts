export const dateFormat = (date: string) => {
  const transformedStringToDate = new Date(date);

  const year = transformedStringToDate.getFullYear();
  const month = transformedStringToDate.getMonth();
  const day = transformedStringToDate.getDate();

  return `${year}년 ${month}월 ${day}일`;
};
