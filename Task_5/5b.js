function Student(FirstName, LastName, id, grades = []) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.id = id;
    this.grades = grades;
    this.avg = function () {
        var sum = 0;
        for (var a = 0; a < grades.length; a++) {
            sum += grades[a];
        }
        var avg = sum / grades.length;
        return avg;
    }
}
var students = new Student("Adam", "Smith", 22222, [3, 4, 4, 3, 5]);
console.log(students.FirstName, students.LastName, students.avg());