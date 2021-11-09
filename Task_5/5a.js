var Apple = {
    name: "Iphone 8",
    memory: 128,
    made: "China"
}
var Samsung = {
    name: "Galaxy s8",
    memory: 256,
    made: "China"
}

function sayHi() {
    console.log('I have', this.name)
}
function sayNo() {
    console.log('Mobile was made in', this.made)
}

Apple.sayHi = sayHi;
Samsung.sayHi = sayHi;
Apple.sayNo = sayNo;

Apple.sayHi()
Samsung.sayHi() 
Apple.sayNo()

function parameter() {
    console.log(Apple.name, Apple.memory, Apple.made,typeof(Apple.name),typeof(Apple.memory),typeof(Apple.made))
}
parameter();
