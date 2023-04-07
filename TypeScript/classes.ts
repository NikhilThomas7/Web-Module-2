class Employe{
    private fname : string;
    private mnames : string;
    private Iname : string;

constructor(fname:string,mnames:string,Iname:string){
     this.fname=fname;
     this.mnames=mnames;
     this.Iname =Iname;
    

}

    getMname():string{
        return this.mnames;
    }


}



class Employee{
   private readonly empno : number;
   private ename : string ;
   private sal : number ;
   private attendance : any;

   public getempno():number{
    return this.empno;
   }
   public getname():string{
    return this.ename;
   }
   public getsal():number{
    return this.sal;
   }
   public getattendance():number{
    return this.attendance;
   }
// constructor(){
//     this.empno =101;
//     this.ename ="abc";
//     this.sal = 200000;
//     this.attendance =18;

// }

constructor(empno: number,ename:string,sal : number,attendance : any){
    this.empno =empno;
    this.ename =ename;
    this.sal = sal;
    this.attendance =attendance;

}

print():void{
    console.log(this.empno,
        this.ename,
        this.sal,
        this.attendance,

        )
}
}
// var emp1 = new Employee();
// emp1.empno =102;
// var emp2 = new Employee();
// emp2.empno =103;
// emp1.print();
// emp2.print();

let emp= new Employee(1,'abc',3000,20);
let emp1= new Employee(2,'def',3500,25);
let emp2= new Employee(3,'ghi',4000,30);

emp.print();
emp1.print();
emp2.print();


