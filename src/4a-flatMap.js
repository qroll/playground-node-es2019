import "./clearConsole";

const groups = {
  fruits: ["apple", "tomato"],
  vegetables: ["eggplant"],
  meat: ["suspicious meat"]
};

// console.log(Object.values(groups).flat());

const searchTerm = /e/;
console.log(
  Object.values(groups).flatMap(group =>
    group.filter(item => searchTerm.test(item))
  )
);

// const selectedGroups = ["fruits", "vegetables", "meat"];
// console.log(selectedGroups.flatMap(selected => groups[selected]));
