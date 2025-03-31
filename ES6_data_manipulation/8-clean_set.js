export default function cleanSet(set, startString) {
  const strings = [...set]
    .filter((str) => str && str.startsWith(startString))
    .map((str) => str.slice(startString.length));

  return strings.join('-');
}
