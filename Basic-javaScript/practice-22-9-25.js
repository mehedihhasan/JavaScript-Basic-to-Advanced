// Indexed collections 

let fruits = [ "Apple","Banana" , "Cherry" ]
console.log("fruits =>",fruits)
console.log("fruits[0] = ", fruits[0] )
console.log("last one:", fruits[ fruits.length-1 ] )

fruits.push("Mango")
console.log("pushed mango:",fruits)

fruits.pop()
console.log("after pop ->",fruits)

fruits.shift()
console.log("shifted =>",fruits)

fruits.unshift("Strawberry")
console.log("now:",fruits)

let numbers = [10,20,30,40,50]
let sq = numbers.map(n => n*n)
console.log("sq:",sq)

let evens = numbers.filter( n => n%2===0 )
console.log("evens:", evens)

let sum = numbers.reduce((acc,cur)=>acc+cur,0)
console.log("sum is", sum)

for (let i=0;i<fruits.length;i++){
  console.log("for i:",i, fruits[i])
}

fruits.forEach((f,i)=> console.log(i, "->", f))

let joined = fruits.join(" | ")
console.log("joined:", joined)


// Keyed collections  

let myMap=new Map()
myMap.set("name","Mehedi")
myMap.set("age",25)
myMap.set("city","Dhaka")
console.log("map size:", myMap.size)
console.log("map name:", myMap.get("name"))

for ( let ent of myMap ){
  console.log("entry:", ent)
}

console.log("has age?", myMap.has("age"))
myMap.delete("city")
console.log("after delete city ->", JSON.stringify([...myMap]) )

let mySet = new Set([1,2,3,3,4,5])
console.log("set (unique):", mySet)

mySet.add(6)
mySet.delete(2)
console.log("set now:", [...mySet])

for (let v of mySet) console.log("set val:",v)

let arrFromSet = Array.from(mySet)
console.log("arrFromSet:", arrFromSet)


//  objects

let person = {
  firstName: "Mehedi",
  lastName : "Hasan",
  age: 25,
  skills: ["JS","Python","SQA"],
  fullName() { return this.firstName + " " + this.lastName }
}

console.log("person:", person)
console.log("full name =>", person.fullName())

person.country = "Bangladesh"
console.log("added country:", person.country)

delete person.age
console.log("age deleted? check:", person.age)

for (let k in person) {
  console.log(k, ":", person[k])
}

console.log("Object.keys:", Object.keys(person))
console.log("Object.values:", Object.values(person))
console.log("Object.entries:", Object.entries(person))

let obj1 = {a:1, b:2}
let obj2 = {b:3, c:4}
let merged = Object.assign({}, obj1, obj2)
console.log("merged:", merged)

let clone = { ...person }
console.log("cloned:", clone)


// Using classes
class Animal{
  constructor(name){
    this.name = name
  }
  speak(){
    console.log(this.name + " makes a noise.")
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name)
    this.breed = breed
  }
  speak(){
    console.log(this.name, " barks!!")
  }
}

let a = new Animal("GenericAnimal")
a.speak()

let doggo = new Dog("Tommy", "German Shepherd")
doggo.speak()
console.log("breed:", doggo.breed)

class Counter {
  #count = 0
  increment(){ this.#count++ }
  decrement(){ this.#count-- }
  get value(){ return this.#count }
}

let cnt = new Counter()
cnt.increment()
cnt.increment()
cnt.decrement()
console.log("counter value =>", cnt.value)



let sample = "Contact: mehedi@mail.com, phone: 01712345678"
let emailRe = /[\w.-]+@[\w.-]+\.\w+/
let phoneRe = /01\d{9}/
console.log("email? ", sample.match(emailRe))
console.log("phone? ", sample.match(phoneRe))

let html = "<div><p>hi!</p></div>"
let noTags = html.replace(/<\/?[^>]+>/g,"")
console.log("html without tags ->", noTags)
