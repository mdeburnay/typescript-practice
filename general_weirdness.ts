/**
 * Without having const here, we could have type of either number OR undefined.
 * This means we could have a situation where we can look for an index even if they array is empty.
 * So, we can make it into a tuple by adding 'as const'.
 * Now, we make it constant, and we can only access the amount of indices available in the 'a' variable.
 */

const a = [1, 2, 3, 4, 5] as const;

// 'b' is now type of '1'
const b = a[0];

/**
 * However, built-in methods have a problem with inferring this information in TS...
 */

a.map((_, i: IndexOf<typeof a>) => {
  const c = a[i];
});

/**
 * If we were to use the type 'keyof typeof a' here, we would get it inferring so many methods or types
 * and so would not be very type safe.
 * So, we create a type called 'IndexOf' which will extend some kind of tuple, and uses recursive types.
 * The first generic will be the type parameter, the second generic is going to be the state of the recursive
 * type which we pass along. Once the size of the array (our state) reaches the same size as the tuple, we
 * will stop and return the result.
 */

type IndexOf<
  T extends [],
  S extends number[] = []
> = T["length"] extends S["length"]
  ? S[number]
  : IndexOf<T, [S["length"], ...S]>;
