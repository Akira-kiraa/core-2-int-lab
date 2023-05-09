type PickByValue<T, V> = Pick<T, { [K in keyof T]: T[K] extends V ? K : never }[keyof T]>;

export type Entries<T> = {
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]];
}[keyof T][];

export function getEntries<T extends {}>(obj: T): Entries<T> {
  return Object.entries(obj) as Entries<T>;
}