function myTimer() {  // This my myTimer function wraps around everything else so we can call it when we need it

//Set variables to use. 
var startTime = 5;
var myInterval = 3000;  //Length of time before it will resstart
var timer = document.getElementById("timer");

//Call the setInterval and give it a name 

//The set interval takes two arguments,  the function and an interval
var mySet = setInterval( createTimer, myInterval);

//This is the function telling the what we want to do at each interval
// You can make it a nameless function (like examples in class) OR
//give it a name and call it by its  name. I think it is neater to 
//give the function its own name like above.

//Here is the function  we called above

function createTimer () {

//You ONLY want the interval to keep going  IF your startTime is above zero

if (startTime > 0) {
timer.textContent = startTime;

//This subtracts 1 from the start time
startTime = startTime - 1

} else {
timer.textContent = "DONE"

// This is your clearInterval. The value it is going to take is the name you gave your 
// setInterval (aee above). This code says, "Stop doing what mySet told you do do now"
clearInterval(mySet)
}
}}


myTimer() // Calling myTimer to get it to work! 