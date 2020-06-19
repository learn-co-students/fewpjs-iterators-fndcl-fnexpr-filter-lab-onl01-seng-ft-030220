function findMatching(source, sought) {
    return source.filter( driver => 
    driver.toLowerCase() === sought.toLowerCase())
    }

function fuzzyMatch(source, string) {
    return source.filter( driver =>
      driver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }

function matchName(source, sought) {
    return source.filter(driver => 
        driver.name === sought
        )
}

function matchName(source, sought) {
    return source.filter(driver => 
    driver.name === sought
    )}