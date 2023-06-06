/**
 * We can actually omit types from Union types, for example:
 */

export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType; // <-- If the type is "c", then return never (as in, this can never be C), otherwise return the type

type WithoutC = RemoveC<Letters>; // <-- "a" | "b"

/**
 * We can also use the Exclude type to do the same thing:
 */

type WithoutC2 = Exclude<Letters, "c">; // <-- "a" | "b"

/**
 * Or, we can use the Extract type to do the same thing:
 */

type OnlyC = Extract<Letters, "c">; // <-- "c"

/**
 * We can also use the NonNullable type to remove null and undefined from a type:
 */

type Nullable = string | null | undefined;
