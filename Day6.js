// Write a “person” class to hold all the details.


class person{
    constructor (name , college , department , age , hobbies , skill){
    this.name = name
    this.college = college
    this.department = department
    this.age = age
    this.hobbies = hobbies
    this.skill = skill    
}
}
const man = new person ("Koushik", "RKMVC", "Biotech", 22, "Animating & Sports", "Editing & Programming")
console.log(man);



// ----------------------------------------------------------------------------------------------------------------------------------------------

// write a class to calculate the uber price.


let baseFee = .85
let areas = ["Kottur", "Adyar", "Guindy", ]
let uberRates = [15, 30, 55]

let customerName = "Koushik" 
let customerArea = "Kottur" 

console.log("Hello", customerName+ ", welcome to the Uber Rate Program")

function getRate(customerArea) {
  
  function uberRate(customerArea, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  
  console.log(customerArea, "rate is:", uberRate(customerArea, areas.indexOf(customerArea)), "₹")
}

getRate(customerArea)



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------