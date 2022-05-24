const findTheOldest = function(people) {
    return people.reduce((a, b) => {
        const oldest = getAge(a.yearOfBirth, a.yearOfDeath);
        const current = getAge(b.yearOfBirth, b.yearOfDeath);
        return oldest > current ? a : b;

    })
};
const getAge = function(birth, death){
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}
// Do not edit below this line

module.exports = findTheOldest;
