# summat

What is this?

Ofttimes, during the process of the usage of TypeScript, one may encounter the following
behaviour:

```ts
interface A {
	a?: X
}

const a: A = {}
a.b = 33 // TypeError: Property 'b' does not exist on type 'A'
```

The solution to this is well known and documented:

```ts
interface A {
	a?: X
	[x: string | number | symbol]: any
}

const a: A = {}
a.b = 33 // ok
```

However, repeating the exact same line, over and over, and over again
(particularly so, in larger applications) may be quite daunting indeed!

This is precisely what the `Summat` interface is for:

```ts
interface Summat {
	[x: string | number | symbol]: any
}

interface A extends Summat {
	a?: X
}

const a: A = {}
a.b = 33 // ok
```

## Installation

```
npm install @hgargg-0710/summat.ts
```

## Documentation

The module provides the following exports (types):

1. `Summat<Type>`
2. `SummatFunction<This, In, Out>`
3. `SummatIterable<Type>`

```ts
interface Summat<Type = any> {
	[x: string | symbol | number]: Type
}
```

Note: useful for adding optional objects to interfaces/object-types;

<br>

```ts
type SummatFunction<This = any, In = any, Out = any> = Summat &
	((this: This, ...args: In[]) => Out)
```

Note: useful for creation of types for functions with properties

<br>

```ts
type SummatIterable<Type = any> = Iterable<Type> & Summat
```
