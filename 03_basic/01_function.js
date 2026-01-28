function sayMyName(){
    console.log("D");
    console.log("e");
    console.log("e");
    console.log("p");
    console.log("a");
    console.log("k");
    
}

// sayMyName()

/* function addTwoNumber(number1,number2){
    console.log(number1+number2);
 
}*/

function addTwoNumber(number1,number2){
    
    // let result = number1 + number2
    // console.log("Deepak")
    // return result
    // console.log("Deep")//after return no prog will print

    // return number1+number2
}

const result = addTwoNumber(3,5)

// console.log(result);

function loginUserMessage(username = "ram"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Deepak"))

//...rest/spread acc to use 
function calculateCartPrice(val1,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Deepak",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price:399
// })

const myNewArray = [200,300,400,100]

function returnsecondvalue(getArray){
    return getArray[1]
}

// console.log(returnsecondvalue(myNewArray))
console.log(returnsecondvalue([200,300,500,1000]))