const account_id = 144553
let account_email = "kartik@gmail.com"
var account_pass = "12345"
account_city = "Jaipur"
let account_state;

// account_id = 2 // not allowed

account_email = "parvatia@gmail.com"
account_pass = "121212"
account_city = "Dahod"

console.log(account_id);


/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/



console.table([account_id, account_email, account_pass, account_city, account_state])