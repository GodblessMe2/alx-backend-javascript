function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((words) => (words !== undefined ? words.startsWith(startString) : ''))
    .map((words) => (words !== undefined ? words.slice(startString.length) : ''))
    .join('-');
}

export default cleanSet;
