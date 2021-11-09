function Classes(classes1=[]) {
    this.classes1 = ['math', 'polish', 'english'];
}
function Student(firstName, lastName, id) {
    Classes.call(this);
    this.FirstName = firstName;
    this.lastName = lastName;
    this.id = id;
}
Student.prototype = Object.create(Classes.prototype);
var student1 = new Student("Adam", "Smith", 22222);
console.log(student1.FirstName, student1.classes1);

