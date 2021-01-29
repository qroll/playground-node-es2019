import "./clearConsole";

const person = {
  name: "Mario",
  height: 156,
  job: "plumber",
  network: 1000000
};

const maskedEntries = Object.entries(person).map(entry => {
  const [key, value] = entry;
  return [key, "██████████"];
});

const classifiedPerson = Object.fromEntries(maskedEntries);

console.log(classifiedPerson);
