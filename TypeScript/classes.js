var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empno =101;
    //     this.ename ="abc";
    //     this.sal = 200000;
    //     this.attendance =18;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
// var emp1 = new Employee();
// emp1.empno =102;
// var emp2 = new Employee();
// emp2.empno =103;
// emp1.print();
// emp2.print();
var emp = new Employee(1, 'abc', 3000, 20);
var emp1 = new Employee(2, 'def', 3500, 25);
var emp2 = new Employee(3, 'ghi', 4000, 30);
emp.print();
emp1.print();
emp2.print();
