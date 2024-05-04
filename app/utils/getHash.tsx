function shuffleString(str: string) {
  const chars = str.split("");

  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

export default function getHash() {
  const crypto = require("crypto");

  const randomHash1 = crypto.randomBytes(32).toString("hex").toUpperCase();
  const randomHash2 = crypto.randomBytes(32).toString("hex").toUpperCase();

  const combinedHash = randomHash1 + randomHash2;
  const shuffledHash = shuffleString(combinedHash);

  const finalHash = shuffledHash.substring(0, 10);

  return finalHash;
}
