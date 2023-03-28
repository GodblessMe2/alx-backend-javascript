export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  const maxCalls = 5;
  const called = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= maxCalls) throw new Error('Endpoint load is high');
}
