const accountId=144556
let accountEmail="pushp@gmail.com"
var accountPassword="12345"
accountCity="jaipur"  //possibility of assigning var w/o usng any constword 
let name   //undefined no value assigned yet

//accountId =2 //not allowed bcoz assigned in const

accountEmail="nyimail@gmail.com"
accountCity="delhi"
accountPassword="123456"

/* prefer not use var because of issue of block scope
and functional scope
*/

console.log(accountId);

console.table([accountCity,accountEmail,accountPassword,name])

