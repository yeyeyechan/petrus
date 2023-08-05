const makepercent = (numberpercent: number) => {
  if (numberpercent !== 0) return (numberpercent * 100).toFixed(2) + "%";
  return numberpercent + "%";
};
const makewon = (numberwon: number) => {
  return numberwon + " 원";
};
export { makepercent, makewon };
