// ./exercises.ts

export function greeter(name: string) {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
    return base * height;
}

export function losango(Dmaior: number, dmenor: number): number {
    return (Dmaior * dmenor) / 2;
}

export function trapezoid(B:number, b:number, h:number):number {
    return ((B + b) * h) / 2
}

export function circuloPI(raio: number): number {
    return Math.PI * Math.pow(raio,2);
}



