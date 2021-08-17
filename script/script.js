"use strict"

let person = {
    name: undefined,
    profession: "teacher",
    teach: (className) => `I am teaching ${className}`,
    sub: function (a, b){
        return a - b
    },
    add: (a, b) => {
        return a + b
    }
}  

function getName (){
    return "Björn"
}

person.theFullName = "Björn Bergqvist"
console.log(person.add(10, 5));

class personClass{
    constructor(name, work){
        this.name = name
        this.profession = work
    }
}

const person1 = new personClass("Björn", "Teacher")
let person2 = new personClass("Bengt", "Teacher")
person2 = person1

console.log(person2.profession);

function clickFunction(){
    alert("I have been clicked!")
}

let num = 0
const add = () => num++

function reduse(){
    num--
    console.log(num);
}

function printValue(){
    alert(num)
}

myFunc: function (){

}