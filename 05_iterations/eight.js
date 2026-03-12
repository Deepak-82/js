const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc + curval
// },0)

const myTotal = myNums.reduce((acc,cur)=> acc + cur,0)
console.log(myTotal)

const Shoppingcart = [
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"MobDev course",
        price:9999
    },
    {
        itemname:"DSA course",
        price:4999
    },
]

const pricetopay = Shoppingcart.reduce((acc,item) => acc + item.price,0)

console.log(pricetopay);
 