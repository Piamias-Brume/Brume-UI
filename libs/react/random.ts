export function genColor(seed: string) {
  const hash = RandomHash(seed);
  const color = Math.floor(Math.abs(Math.sin(hash) * 16777215));
  var colorString = color.toString(16);
  while (colorString.length < 6) {
    colorString = "0" + colorString;
  }
  return "#" + colorString;
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function RandomHash(seed: string) {
  let i = 0;
  let hash: number;
  for (hash = 1779033703 ^ seed.length; i < seed.length; i++) {
    let bitwise_xor_from_character = hash ^ seed.charCodeAt(i);
    hash = Math.imul(bitwise_xor_from_character, 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  hash = Math.imul(hash ^ (hash >>> 16), 2246822507);
  hash = Math.imul(hash ^ (hash >>> 13), 3266489909);
  return (hash ^= hash >>> 16) >>> 0;
}

export function reverseString(str: string) {
  return str.split("").reverse().join("");
}
