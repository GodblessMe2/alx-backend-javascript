export default function concatArrays(array1, array2, string) {
  const spreadConcat = [...array1, ...array2, ...string];
  return spreadConcat;
}
