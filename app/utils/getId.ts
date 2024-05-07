export default function getId() {
  const min = 30;
  const max = 99999;
  return Math.floor(min + Math.random() * (max - min + 1)).toString();
}
