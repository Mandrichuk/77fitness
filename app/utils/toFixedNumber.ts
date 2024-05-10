export default function toFixedNumber(num: number) {
  let roundedNum = Math.round(num * 100) / 100;
  let formattedNum = roundedNum.toFixed(2);
  return formattedNum;
}
