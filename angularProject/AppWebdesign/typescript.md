# Introduction
TypeScript is a superset of JavaScript  which adds **static typing.**

It adds syntax on top of JavaScript, allowing us to add **types.**

Key Features of Typescript:

  1. Static Typing
  2. Type Inference
  3. Class-based Object-Oriented Programming
  4. Module System
  5. ECMAScript Compatibility
  6. Code Readability and Maintainability
  7. Tooling and IDE Support
  8. Compilation and Transpilation
  9. Type Declarations and Ambient Types
  10. Language Services and Language Tools 

# Reuirement to install TypeScript
- Text Editor or IDE
- Node.js Package Manager(npm)
- TypeScript Compiler

# Install TypeScript using npm
1. Install Node.js, from following link:

 >>[Install on Windows]( https://www.javatpoint.com/install-nodejs)

 >>[Install on Linux/Ubuntu/CentOS]( https://www.javatpoint.com/install-nodejs-on-linux-ubuntu-centos)

 >>To verify installation was sucessful,enter following command in Terminal Window.
 ```bash
  $ node -v
  $ npm -v
 ```

2. Install TypeScript, enter following command in Terminal Window.
 ```bash
  $ npm install typescript --save-dev # As dev dependency

  $ npm install typescript -g # Install as a global module 

  $ npm install typescript@latest -g # Install latest if you have an older version  
```
3. Verify installation was successful, enter following comand in Terminal Window.
```bash
 $ tsc -v
```
# TypeScript First Program
1. Open Text Editor and write following code:
```typeScript
  function greeter(person) {  
      return "Hello, " + person;  
  }  
  let user = 'JavaTpoint';  
  console.log(greeter(user));  
```

2. Save above file as `".ts"` extension.

3. Compile the TypeScript code, type following command in Terminal Window.
```bash
 $ cd Desktop/TypeScriptFiles #path of file
 $tsc trial1.ts #compile above .ts file
```
>It will generate JavaScript file with `".js"` extension at the same location where the TypeScript source file exists.

4. To run above JS File, type following command in Terminal Window.
```bash
 $ node trial1.js
```

# TS Simple Types (*primitives*)
1. **number:** Represents numeric value 
```typeScript 
  let age: number = 30;
  let price: number = 40.5;
```

2. **boolean:** Represents logical value
```typeScript 
  let isStudent: boolean = true;
```

3. **string:** Represents textual data enclosed in single or double quotes
```typeScript 
  let message: string = 'Hello, TypeScript!';
```

4. **null:** Represents the absence of a value 
```typeScript 
  let value: null = null;
```

5. **undefined:** Represents a variable that has not been a assigned value
```typeScript 
  let value: undefined = undefined;
  let value: undefined;
```

6. **symbol:** Represents an identifier
```typeScript 
  let id1 : symbol = Symbol("id");
  let id2 : symbol = Symbol("id");
```

7. **bigint:** Represents arbitrary precision integers
```typeScript 
  let bigNumber: bigint = BigInt(9007199254740991);
  let anotherBigNumber: bigint = 9007199254740991n;
```

# TS Special Types
1. **any** is a type that disables type checking and effectively allows all types to be used.
```typeScript
  let value: any = 50;
  value = "Hello";
  value = false;
```

2. **void**  denotes the absence of a value
```typeScript
  function showMessage(): void {
    console.log("Hello, TypeScript!");
  }
```

3. **never** effectively throws an error whenever it is defined
```typeScript
  let x: never = true;
```

# TS Arrays
It denotes an ordered list of elements of a specific data type. We can specify the data type followed by `[]` or use the generic `Array<type>`

```typeScript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "orange"];
```

# TS Tuples
It is an array with a fixed number of elements where each element can have a different data type
```typeScript
let person: [string, number, boolean] = ["John", 25, true];
```

# TS Objects
It denotes a non-primitive type
```typeScript
let profile: object = { 
  name: "Ram", 
  age: 30 };
```

# TS Enum
It denotes a set of named values. It can be used if we need to work with fixed set of values
```typeScript
enum Color {
  Red,
  Green,
  Blue
}
let selectedColor: Color = Color.Red;
console.log(selectedColor); 
``` 

# Ts Interfaces
It is used to define structure of an object. It provides a way to describe shape of an object and specify types of its properties and methods. 

It is compile-time construct and do not generate any JS code.

### Syntax:
```typeScript
interface InterfaceName {
  property1: type;
  property2: type;
  method1(): returnType;
  method2(param: type): returnType;
}
```
### Implementing Interfaces
---
Using keyword `implement` we can implement interfaces in classes. It povides implementations for all memebers defined in interface.
```typeScript
interface People {
  name: string;
  age: number;
  sayHello(): void;
}

class Student implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const student = new Student('John Doe', 25);
student.sayHello(); 
```

### Extending Interfaces
---
Using `extends` keyword we can extend interfaces with other interfaces. It allows an interface to inherit properties and methods from one or more other interfaces.
```typeScript
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
```

# Type Aliases
It provides a way to create custom names for any types, including primitives, union-types, intersection types, object types, etc.

It is compile-time construct and do not generate any JS code.

Syntax:
```typeScript
  type Aliasesname = type;
```

Example: 
```typeScript
  type ID = number | string;

  type Person = {
    name: string;
    age: number;
  };

  type Employee = Person & {
    employeeId: number;
  };

  type Result<T> = {
    success: boolean;
    data: T;
  };

  const id: ID = 1;
  const person: Person = { name: 'John Doe', age: 25 };
  const employee: Employee = { name: 'Jane Smith', age: 30, employeeId: 123 };
  const result: Result<Person> = { success: true, data: person };
```

# TS Union Types
It is used when a value can be more than a single type. We use `|` symbol for union operation. It allows a variable to have multiple possible types.
```typeScript
//Union type in variable 
let myVariable: number | string;

myVariable = 10; 
console.log(myVariable); 

myVariable = "Hello"; 
console.log(myVariable);

// Union type in function parameter
function printValue(value: number | string): void {
  console.log(value);
}

printValue(20); 
printValue("World"); 
```
## Union Type Error
When working with a union type, we need to handle cases where a value might not be compatiable with all types of union. If not handled properly it brings `Union type Eror` 
```typeScript
function printLength(value: string | number): void {
  console.log(value.length);
}

printLength("Hello"); 
printLength(10); // gives error as Property 'length' does not exist on type 'number'
```

# TS Intersection types
It allows us to combine multiple types into a single type that has all the properties and methods of each individual type. It can be defined using the ampersand (&) operator.
```typeScript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  id: number;
  department: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "John Doe",
  age: 30,
  id: 123,
  department: "IT",
};

console.log(employee.name); 
console.log(employee.age);
console.log(employee.id);
console.log(employee.department);

```

## Difference between extends interface and intersection types
|Extends Interface | Intersecrtion types |
| ----------- | -----------|
| specfic to interfaces | used with any types |
| inherit memmbers from an existing  interface and create a new interface  | combines multiple types into a single type |
| can override or add new members to extend | resulting type contains all memebers from intersected types |
| creates new type | represent a combined type without creating a new named type |

# Type Inference
It is the feature that allows the compiler to automatically determine the type of a variable based on its initialization value.

It improves code readability and reduces the potential for type-related errors by leveraging the initial values to determine the types.

```typeScript
  let message = "Hello, TypeScript!"; // The variable 'message' is inferred as type string
  console.log(typeof message); // Output: "string"

  message = 42; // Error: Type 'number' is not assignable to type 'string'
  console.log(typeof message);
```

But in case of javaScript type inference works as below:
```javaScript
  let message = "Hello, TypeScript!"; // The variable 'message' is inferred as a string
  console.log(typeof message); // Output: "string"

  message = 42;  // The variable 'message' is now  inferred as a number
  console.log(typeof message); // Output: "number"
```

# Optional Properties
It is properties of an object that may or may not be present. By marking a property as optional, you indicate that it is not required to be present in the object.

We use `?` symbol after property name in object type annontation to define optional properties.
```typeScript
  interface Person {
    name: string;
    age?: number; // Optional property
    email?: string; // Optional property
  }

  const person1: Person = {
    name: "John",
    age: 25,
  };

  const person2: Person = {
    name: "Jane",
  };

  const person3: Person = {
    name: "Mike",
    age: 30,
    email: "mike@example.com",
  };
```

We can access it by following way:
```typeScript
  if (person1.age !== undefined) {
    console.log(person1.age);
  }

  console.log(person2.age); // Output: undefined

  console.log(person3.email); // Output: "mike@example.com"
```

# Indexed Signatures

```typeScript
  interface Book {
    [key: string]: any;
  }

  const vol1: Book= {
    name: "title",
    page: 100,
    author: "RK Sharma",
  };

  console.log(vol1['name']);
  console.log(vol1['page']);
  console.log(vol1['author']); 

```

# Readonly
It prevent values of data types from being changed. It is keyword. 
```typeScript
  Example1:
  const names: readonly string[] = ["Dylan"];
  //names.push("Jack"); gives error if executed
```
```typeScript
  Example2:
  interface Person {
    readonly name: string;
    readonly age: number;
  }

  const person: Person = {
    name: "John",
    age: 25,
  };

  //person.name = "Jane";  gives error if executed
```

# TS Functions
### Function Declaration
Using `function` keyword
```typeScript
function add(a: number, b: number): number {
  return a + b;
}
```
### Optional Parameters
It allows us to provide a default value or pass `undefined` if argument is omitted.

by adding `?` symbol after parameter name in function declaration makes functional parameter optional.
```typeScript
function greet(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello!");
  }
}
```
### Default Parameters
It allows to set default values for function parameters
```typeScript
function pow(value: number, exponent: number = 2) {
  return value ** exponent;
}

console.log(pow(10));// (Output: 100) Here exponent variable takes by default 2 
console.log(pow(10,1));// (Output: 10) Here exponent variable takes 1 
```

### Rest Parameters
It is denoted by the `'...'` syntax, which allow a function to accept an arbitrary number of arguments as an array.
```typeScript
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add(10,10,10,10,10)); //Output: 50
// first two parameters(10,10) are assigned to a and b but remaning(10,10,10) are collected in an array and assigned to rest parameter
```
A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.

### Arrow functions
It provides a concise syntax and lexical scoping of the `this` keyword.
```typeScript
const double = (x: number): number => x * 2;
```

### Function types
It can be define using arrow syntax or `type` keyword.
```typeScript
type MathOperation = (x: number, y: number) => number;
const add: MathOperation = (x, y) => x + y;

```

# Type casting
Overidinf of a type. It can be done using two syntaxes: 

1. Casting with as
```typeScript
let x: unknown = 'hello';
console.log((x as string).length);
```

2. Casting with <>
```typeScript
let x: unknown = 'hello';
console.log((<string>x).length);
```

# TS Classes
```typeScript
class Person {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Methods
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating an instance of the Person class
const person = new Person('John', 25);

// Accessing properties
console.log(person.name); 
console.log(person.age); 

// Calling methods
person.sayHello(); 

```

# Modifiers 
There are threee main visibility modifiers in TypeScript

1. **public:** (default) allows access to class member from anywhere

2. **private:** only allows access to classs member from within class

3. **protected:** allows access to class memeber from itself and any classes that inherit it, which is covered in inheritance section below
 

```typeScript
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
```

# Inheritance
It creates new class based on an existing class, known as base class or superclass. The new class is called derived class or subclass. We use `extends` keyword for inheritance

During inheritance, it is important to call super class constructor before accessing `this` or any members of derived class within constructor.
```typeScript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // Call the base class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog('Max', 'Labrador');
console.log(dog.name); 
console.log(dog.breed); 
dog.eat(); 
dog.bark(); 
```

# TS Generics
It provides a way to create reusable and flexible components by allowing types to be parameterized

### Function Generics:
```typeScript
function identity<T>(value: T): T {
  return value;
}

const result = identity<string>("Hello, TypeScript");

const numberResult = identity<number>(42);
```
### Interface Generics:
```typeScript
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<string, number> = {
  first: "One",
  second: 2,
};
```

### Class Generics:
```typeScript
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const box = new Box<string>("Hello");
const value = box.getValue();
// value has type string, inferred from the generic type parameter
```

## Difference between Generic type and any type
|Generic types|`Any` type|
|-------|------|
|using generics, compiler enforces type checking and ensures that correct types are used|disables type checking and allows any type to be assigned to variables, leading to potential type errors|
|allow to infer types|no type infernce lsing benefits of static typing|

# TS Modules
It is used to organize and encapsulate code into reusable and indepensenet units. 

### Module Syntax:
Use of `export` keyword to export entities from a module and `import` keyword to import entities from other modules

# TS Decorators
It allows to add metadata or modify behavior of classes,methods, properties, or 
parameters at design time. 

Use `@` symbol followed by decorator name and are applied to target before it is declared.