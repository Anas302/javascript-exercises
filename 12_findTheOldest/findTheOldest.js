const findTheOldest = function(people) {
    let oldest = people[0];


    for(let person of people){
        let oldestBirth = oldest.yearOfBirth;
        let oldestDeath = oldest.hasOwnProperty("yearOfDeath") ? oldest.yearOfDeath : 2022;
        let oldestAge = oldestDeath - oldestBirth;

        let birth = person.yearOfBirth;
        let death = person.hasOwnProperty("yearOfDeath") ? person.yearOfDeath : 2022;
        let age = death - birth;
        if(age > oldestAge)
            oldest = person;
    }
    return oldest;
};
        // if(person.hasOwnProperty("yearOfDeath"))
        //     death = person.yearOfDeath;
        // else
        //     death = 2022;
// Do not edit below this line
module.exports = findTheOldest;
