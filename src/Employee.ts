export default class Employee {
    
    protected _name: string;
    protected _baseSalary: number;
    protected _monthlyWorkload: number;

    constructor(name: string, baseSalary: number, monthlyWorkload: number) {
        this._name = name;
        this._baseSalary = baseSalary;
        this._monthlyWorkload = monthlyWorkload;
    }

    public calcSalary(extraHours: number): number {
        const salaryHour = (this._baseSalary / this._monthlyWorkload);
        const extraHourAmount = extraHours * salaryHour;
        let finalSalary = this._baseSalary + extraHourAmount;
        return finalSalary;
    }
}