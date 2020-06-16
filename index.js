// Code your solution here
function findMatching(drivers, match) {
  return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => driver.slice(0, letter.length) === letter)
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}
