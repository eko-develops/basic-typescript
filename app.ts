export {};
//Basic types
let id: number = 5;

let name: string = "John";

let isBoolean: boolean = true;

//Any means the variable can be assigned to any type
let x: any = "String";
x = true;


//Arrays
let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let arr: any[] = [1, 'Hello', true];


//Tuples
let person: [number, string, boolean] = [1, 'John', false];
//Tuple Array
let employee: [number, string][]
employee = [
    [1, 'John'],
    [2, 'Jack']
]


//Union - If you want a variable to hold more than 1 type
let pid: string | number = 1;


//Enum - A set of named constants
enum Direction1{
    Up,
    Down,
    Left,
    Right
}


//Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}
// const user: { id: number, name: string} = {
//     id: 1,
//     name: 'John'
// }


//Type Assertion - Explicilty tell the compliler that we want to treat an entity as a different type
let cid: any = 1;
let customerId = <number>cid
// let customerId = cid as number
customerId = 2;


//Functions
function addNum(x: number, y: number): number{
    return x + y;
}
//If the function doesn't return anything, use void
function log(message: string | number): void{
    console.log(message);
}
//Functions can use interfaces
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


//Interfaces
interface UserInterface {
    readonly id: number,    //Add readonly to a property so it can't be changed
    name: string,
    age?: number    //Add a question mark for optional properties
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
}


//You can use a type with primitive values or unions
type Point = number | string;
const p1: Point = 2;


//Classes
interface PersonInterface {
    id: number;
    name: string;
    greet(): string;
}
class Person implements PersonInterface {
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    };

    // private id: number  //Property only accessible in the class
    id: number  
    // protected name: string  //Property only accessible in the class and sub-classes
    name: string  

    greet(){
        return `My name is ${this.name}.`;
    }
}

// const john = new Person(1, 'John');
// console.log(john.greet());

class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string){
        super(id, name);

        this.position = position;
    }
}

// const emp = new Employee(3, 'Jane', 'Teacher');


//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["a", "b", "c", "d"]);


//Create react app with typescript
//npx create-react-app app-name --template typescript