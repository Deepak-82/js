const accountId = 144553
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountstate;

// accountId = 2
accountEmail = "dp@dp.com"
accountPassword = "6789"
accountcity = "Baglore"

console.log(accountId);
// prefer not to use var because of issue in block scope

console.table( [accountId, accountEmail, accountPassword, accountcity, accountstate] )

