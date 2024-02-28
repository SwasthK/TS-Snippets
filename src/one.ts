const x: number = 100;
console.log(x);

function greet(username: string) {
    console.log("hello " + username);
}

greet("raaju")

function sum(a: number, b: string) {
    return a + b
}

console.log(sum(100, " pools"));

function islegal(age: number): boolean {
    if (age > 18)
        return true;
    else
        return false;
}

lateprint(() => {
    return islegal(40);
});

function lateprint(a: () => boolean) {
    setTimeout(() => {
        console.log(a());
    }, 4000);
}

function dummy() {
    console.log("hello world");
}

function runlate(b: () => void) {
    setTimeout(() => {
        b()
    }, 4000);
}

runlate(dummy)

// ES2016 supported
const myfun = (name: string) => `hello ${name}`


function islegalcheck(user: {
    name: string,
    age: number
}): boolean {
    return (user.age > 18) ? true : false
}

console.log(islegalcheck({
    name: "swasthik",
    age: 9
}))

function myuser(You: you) {
    return (You.age > 18) ? true : false
}

const You = {
    age: 30,
    name: "ew"
}

console.log(myuser(You));

interface you {
    age: number,
    name?: string
}

interface Person {
    name: string,
    age: number
    greet(msg: string): void
}

class Employee implements Person {
    name: string;
    age: number;
    constructor(n: string, m: number) {
        this.name = n;
        this.age = m
    }
    greet(msg: string): void {
        console.log("hello " + msg);
    }
}

let e = new Employee("word2", 10)

e.greet("word1");