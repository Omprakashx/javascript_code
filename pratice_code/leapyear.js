/* let num = int(prompt("enter any year for checking leap year or not?"))

if(num/4===0 || num/100===0){
    console.log(+num,"is a leap year");
}
else{
    console.log(+num,"not a leap year")
} */


// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);