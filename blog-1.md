# The significance of union and intersection types in Typescript.

## Union Type
Union types are used when a variable to hold multiple types.
### Example
``` const value: string | number; ```

### Significance of union type
 Union types are valuable when a variable might accept more than one type. For instance, handling different types of input values (string | number).

## Intersection Types
interSection type combine multiple tipes into one type, which results in a types that has all properties of the combine types.

### Exapple
``` type Person1: {
    name: string;
    age: number;
}

type Person2: {
    adderss: string;
    isAdult: boolean;
}

type Person: Person1 @ Person2
 ```

### Significance of union type
They provide a way to enforce that an object meets multiple contract requirements, which is particularly helpful in systems where multiple roles or capabilities need to be represented in one object.
