// Code your solution in this file.

function lowerCaseDrivers(list) {
  return list.map(function(item) {
    return item.toLowerCase();
  });
}
function nameToAttributes(list) {
  return list.map(function(item) {
    const firstName = item.split(" ")[0];
    const lastName = item.split(" ")[1];
    return {firstName: firstName, lastName: lastName};
  });
}
