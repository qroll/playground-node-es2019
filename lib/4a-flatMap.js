"use strict";

// use case: combobox
var groups = {
  fruits: ["apple", "tomato"],
  vegetables: ["eggplant"],
  meat: ["suspicious meat"]
};
console.log(Object.values(groups).flat());
var searchTerm = /e/;
console.log(Object.values(groups).flatMap(function (group) {
  return group.filter(function (item) {
    return searchTerm.test(item);
  });
}));
var selectedGroups = ["fruits", "vegetables", "meat"];
console.log(selectedGroups.flatMap(function (selected) {
  return groups[selected];
}));