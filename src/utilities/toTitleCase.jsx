function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
export default toTitleCase;
