const accountId = 144553
let accountEmail = "manasi@google.com"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;

// accountId = 2

accountEmail = "ms@ms.com"
accountPassword = "213232"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
cauz of issues in block and functional scopes
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

