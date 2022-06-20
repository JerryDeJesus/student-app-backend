// write a func that takes a string and number 
// and repeats the string n times
// with a space in the middle of each.


// "Jerry", 3 ==> "Jerry Jerry Jerry"

function repeatNTimesWithSpace(string, num){
    return (string + ' ').repeat(num);
}

module.exports = repeatNTimesWithSpace;