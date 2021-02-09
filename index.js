// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// higher order function
// takes int as arg.
// returns funct. that will multiply a fare for a ride accordingly  
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

// assign funct. returned by createFare
const fareDoubler = function(fare) {
    // invoke createFare, accepts fare as lone arg and doubles it
    return createFareMultiplier(2)(fare)
}

// do the same as above, but triple
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}


//takes 2 arg: array of drivers and either the first of last drivers funct.
//returns either the last or first 2 drivers
function selectDifferentDrivers(drivers, oneOfTheFunctions) {
    return oneOfTheFunctions(drivers)
}