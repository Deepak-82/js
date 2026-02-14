// Imediately Invoked Function Expressions (IIFE)


(function chai (){
    console.log('DB CONNECTED');
})();
//global scope me jo pollution hota h usko hatane k liye IIFE ka use kiya
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Deepak')