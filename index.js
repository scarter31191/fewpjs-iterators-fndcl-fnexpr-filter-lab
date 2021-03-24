function findMatching(drivers, target) {
    return drivers.filter(t => {return t.toLowerCase() === target.toLowerCase()})
}

function fuzzyMatch(drivers, target) {
    return drivers.filter(t => {return t.startsWith(target)})
}

function matchName(drivers, target) {
    return drivers.filter(t => {return t.name === target})
}