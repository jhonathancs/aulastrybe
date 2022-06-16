import Dev from "./Dev";
import Nurse from "./Nurse";

const joy = new Nurse('Enfermeira Joy', 1000, 200, 1234);
const rafa = new Dev('Rafa Guima', 10000, 250, 'projeto 2');

console.log(joy.calcSalary(500));
console.log(rafa.calcSalary(100));


