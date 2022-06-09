const repeatString = function(string, num) {
    let finalString = "";

    if(num >= 0){
        for(let i=0; i<num; i++)
            finalString += string;
    }
    else{
        finalString += "ERROR";
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
