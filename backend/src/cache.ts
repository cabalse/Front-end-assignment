import NodeCache, { Key, Options, ValueSetItem } from 'node-cache'

function Cache<T = void>(
  options: Options &
    (T extends void
      ? 'Error: Type parameter must be provided (`Cache({})` -> `Cache<T>({})`)'
      : Options)
) {
  const cache = new NodeCache(options)

  return {
    ...(cache as Required<typeof cache>),
    get: (key: Key) => cache.get<T>(key),
    mget: (keys: Key[]) => cache.mget<T>(keys),
    mset: (keyValueSet: ValueSetItem<T>[]) => cache.mset<T>(keyValueSet),
    set: (key: Key, value: T, ttl?: number | string) =>
      cache.set<T>(key, value, ttl as number | string),
    take: (key: Key) => cache.take<T>(key),
  }
}

export default Cache;
