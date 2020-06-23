// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, pattern) => {
  return drivers.filter(driver => driver.startsWith(pattern))
}

const matchName = (drivers, name) => {
  return drivers.filter(driverObj => driverObj.name === name)
}