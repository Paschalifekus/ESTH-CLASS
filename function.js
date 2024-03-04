// function : block of code meant to perform specific tasks
//functions to add new number

// function add(){
//     let a = 2
//     let b = 3
//     console.log(a+b)
// }
// add()

// function substraction(){
//     let num1 = 10
//     let num2 = 5
//     console.log(num1 - num2)
// }
// substraction()

//function parameters

function add(a,b){
    console.log(a+b)
}
add(100,50)

function substraction(num1,num2){
    if(num1 > num2){
        let diff = num1 - num2
        console.log(diff)
    }else{
        console.log("get out")
    }
}
substraction(70,234)

function add(a,b){
    console.log(a+b)
    return (a+b)
}
add(100,30)