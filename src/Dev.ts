import Employee from "../Employee";

export default class Dev extends Employee {
    private _project: string;
    private _coding: boolean;

    constructor(name: string, baseSalary: number, monthlyWorkload: number, project: string){
        super(name, baseSalary, monthlyWorkload);
        this._project = project;
        this._coding = false;
    }

}