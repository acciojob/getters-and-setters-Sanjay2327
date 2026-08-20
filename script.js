//complete this code
class Person {
	constructor(name: string, age: number)
	this.name = name ;
	this.age  = age ;
}

get changeName(){return this.name}

set changeAge(){return this.age}

class Student extends Person {
	constructor(name: string, age: number)

	study(){
		return(
			Student.name + "is studying"
		)
	}
}

class Teacher extends Person {
	constructor(name: string, age : number)

	teach(){
		return{
			Teacher.name + "is teaching"
		}
	}
}

const Student1 = new Student("Sanjay", 28)
const Teacher1 = new Teacher("Priyanshi", 26)
console.log(Student1);
console.log(Teacher1);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
