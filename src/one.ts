const x: number = 100;
console.log(x);

function greet(username: string) {
    console.log("hello " + username);
}

greet("raaju")

function sum(a: number, b: string) {
    return a + b
}

console.log(sum(100, "kdkd"));

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

const myfun = (name: string) => `hello ${name}`
