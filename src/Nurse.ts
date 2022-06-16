import Employee from "./Employee";

export default class Nurse extends Employee {
    private _corenNumber: number;
    private _inAttendance: boolean;

    constructor(name: string, baseSalary: number, monthlyWorkload: number, corenNumber: number) {
        super(name, baseSalary, monthlyWorkload);
        this._corenNumber = corenNumber;
        this._inAttendance = false;
    }

    public calcSalary(extraHours: number): number {
        const salaryExtra = this._baseSalary * 0.3; 
        const salaryHour = (this._baseSalary / this._monthlyWorkload);
        const extraHourAmount = extraHours * salaryHour;
        let finalSalary = this._baseSalary + extraHourAmount + salaryExtra;
        return finalSalary;
    }

    // public calcSalary(extraHours: number): number {
    //     const salaryExtra = this._baseSalary * 0.3; 
    //     return super.calcSalary(extraHours) + salaryExtra;
    // }

}