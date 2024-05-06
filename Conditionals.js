const prompt = require("prompt-sync")();
let time = prompt("what is the time in your area? ");
if (time < 12){
	console.log("Good moring");
}else if(time < 16){
	console.log("Good afternoon");
}else{
	console.log("Good evening");
}	
