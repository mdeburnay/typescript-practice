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
 * Or, if we wanted to get only C from the union, we could use the Extract type:
 */

type OnlyC = Extract<Letters, "c">; // <-- "c"
