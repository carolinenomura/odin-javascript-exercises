const findTheOldest = function (people) {
  let oldestAge = 0;
  let oldestPerson;
  let age;

  people.forEach((person) => {
    if (person.yearOfDeath == undefined) {
      const currentYear = new Date().getFullYear();
      age = currentYear - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
