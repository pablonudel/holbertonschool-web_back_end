export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const strings = [...set]
    .filter((str) => str && str.startsWith(startString))
    .map((str) => str.slice(startString.length));

  return strings.join('-');
}
