/*const name  = ["Gracious", "Pleasant"]
for (let index = 0; index < name.length; index++){
const element = name[index];

console.log(index + " "+ element.toUpperCase())
}*/


/*const num = [2, 4, 6, 8, 10]
for (const mynum of num) {
    let result = mynum * 2

    console.log(result)
}*/

// const num = [2, 4, 6, 8, 10]
// num.push(12)//this is to add last element in an array
// num.unshift(0)//this adds an element in the front of an array
// num.pop() //this removes the last element
// num[2] = 70 //this changes an element in a particular position
// console.log(num)


// let num = 2

// while (num < 10) {
//     console.log(num * 2)
//    num =  num + 2
// }


// console

let amount = 4000
let username = "Paschal"
let password = "123456"
let count = 1

while(count <= 3){
    if (!username == "Paschal" && password == "123456"){
       console.log("You have " + count + "remaining")
       count++
    }else{
        let currentBalance = amount - withdraw
        console.log(currentBalance)
    }
}