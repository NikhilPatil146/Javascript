const accountID=123456
let accountEmail="nikhilpatil@google.com"
var accountPassword="12942"
accountCity="ahmedabad"
let accountState;
{
    //scope
}

// accountID=1
accountEmail="hp@hp.com"
accountPassword="234"
accountCity="jaipur"

console.log(accountID);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])