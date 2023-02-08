export const getTemp = (temp: number, unit: string) => {
  if (unit === "C") return temp;
  return Math.round((temp * 9) / 5 + 32);
};

export const convertTimestamp = (timestamp: number, offset: number) => {
  let date = new Date((timestamp + offset) * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
};
