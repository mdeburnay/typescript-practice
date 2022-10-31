// SHOUTOUT TO BEN AWAD 🫡

/**
 * Let's build a function called last which takes in an array of numbers and returns the last element.
 */

const last = (arr: number[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]); // <-- All good, as it is expecting a number

const l2 = last(["a", "b", "c"]); // <-- Error, as it is expecting a number

/**
 * So what we do is create a generic type, where TypeScript does not know the type of the array.
 */

const last2 = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

/**
 * ^ This 'T' type is a generic type, and will infer the type of the array.
 * We also have the return type of 'T' too.
 */

const l3 = last2<number>([1, 2, 3]); // <-- All good, as it is expecting a number array

const l4 = last2<string>(["a", "b", "c"]); // <-- All good, as it is expecting a string array

/**
 * We can also pass in more than one generic type...
 */

const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x, y];
};

const v = makeArr<number, number>(5, 6); // <-- All good, as it is expecting a number array
const v2 = makeArr<number, string>(5, "a"); // <-- All good, as it is expecting a number and string array
const v3 = makeArr<string, string>("a", "b"); // <-- All good, as it is expecting a string array

/**
 * When returning an object, we can use generic types to also ensure we have certain parameters pass into it using
 * the 'extends' key word.
 * For example, if we have a person object, we can ensure that the object has a first name and last name, and then
 * accept any other additional properties that we the person may have.
 */

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const v4 = makeFullName({ firstName: "John", lastName: "Doe", age: 15 });

/**
 * We can also pass in generics to interfaces.
 * This comes in handy when you want 'types of types' that inherit from a base like the below, and we havea generic type
 * that we want to pass in.
 */

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
