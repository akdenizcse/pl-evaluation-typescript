/**
 * Declaring a abstract class for inheritance. 
 * 
 */


abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // like in other OOP super must be called in Ts too
        this.empCode = code;
    }

    find(name:string): Person { 
        
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("John", 100);
emp.display(); //James

let emp2: Person = emp.find('Jane');