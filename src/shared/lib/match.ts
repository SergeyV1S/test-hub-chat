export const match = <T extends string | number | symbol, V>(
  value: T,
  handlers: Record<T, () => V>
): V => {
  const handler = handlers[value];

  return handler();
};
