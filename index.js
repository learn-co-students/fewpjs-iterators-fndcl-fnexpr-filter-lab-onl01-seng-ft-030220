function findMatching(drivers, str){
   let driverList = drivers.filter(driver => driver.toUpperCase() === str.toUpperCase())
        return driverList
    //console.log(driverList)
}

function fuzzyMatch(drivers, str){
let theseDrivers = drivers.filter(driver => driver.substring(0,1) === str.substring(0,1))
return theseDrivers
}

function matchName(drivers, str){
    let finalList = drivers.filter(driver => driver.name === str)
    return finalList
}