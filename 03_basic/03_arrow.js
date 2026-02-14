const user = {
    username: "Deepak",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

/*function chai(){
    let username = "Deepak"
    console.log(this.username);//this only work on object not on function 
}

chai()*/

// const chai = function(){
//     let username = "Deepak"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Deepak"
    console.log(this);
}


chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }//basic arrow function

// const addTwo = (num1,num2) => num1 + num2//implicit return function
// const addTwo = (num1,num2) => (num1 + num2)
//{} need to write return ,()paranthesis dont need to write
const addTwo = (num1,num2) => ({username:"Deepak"})

console.log(addTwo(5,7))

const myArray = {2,6,4,8,7,9}
myArray.forEach