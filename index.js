const driverList =['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return driverList.slice(0,2);
}
const returnLastTwoDrivers = function(drivers) {
    return driverList.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = function(fareMultiplier) {
    return function(number) {
        return fareMultiplier * number;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverList, arg) {
    return arg(driverList);
}