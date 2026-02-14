var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log(a);//block level scope
    
}

// console.log(a);//global scope
// console.log(b);
// console.log(c);

function one(){
    const username = "Deepak"

    function two(){
        const website = "yt"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one()

if (true) {
    const username = "Deep"
    if (username === "Deep"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++++++++++interesting+++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num+1
}


addTwo(7)
const addTwo = function(num){
    return num+2
}

