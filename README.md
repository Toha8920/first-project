# first-project

validation er jonno kono likhar age pore kono space na porar jonno "trim" use kora hoy.

R sadaranoto built in error message er jonno required use kora hoy er sathe custom error use korte chaile [] er prothom perametter er jonno true or false dite hoy erpor koma diye error message ta dite hoy. Ar jodi required ta jodi array hoy([]) tahole object banai nite hoy jar 2 ta property thake values ar message.

\*\* model er schema er jonno sobsomoy noraml function use kora uchit karon hoyto this access kora lagte pare.Ar arrow function e this kaj kore na!

Database e j kono validation er jonno mongoose er website e gele hobe;

instance method static method

//instance method
class Counter {
count:number=0

increment(){
return (this.count =this.count+1)
}
decrement(){
return (this.count =this.count-1)
}
}
//creating instance
const counter1=new Counter();
counter1.increment() //instance method
counter1.decrement() //instance method

//static method
class Counter {
static count:number=0

static increment(){
return (this.count =this.count+1)
}
static decrement(){
return (this.count =this.count-1)
}
}

Counter.increment() //static method
Counter.decrement() //static method

mongoose built in method

StudentModel.create() //builtin static method

const student=new StudentModel();
student.save(); //builtin instance method
