import _ from "lodash";
import "./clearConsole";

const person = {
  // job: {
  //   title: "Software Engineer",
  //   salary: 0
  // },
  videoGameCollection: [
    // {
    //   title: "Portal",
    //   platform: "PC"
    // }
  ]
};

// -> vanilla javascript
// const salary = person && person.job && person.job.salary;

// -> lodash
// const salary = _.get(person, "job.salary");

// -> new: optional chaining
const salary = person?.job?.salary;

console.log(salary);
