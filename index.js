const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    
function createFareMultiplier(num) {
    return function (fare) {
        return fare * num
    }
}

const fare = function (num) {
    return createFareMultiplier(num);
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, firstOrLast) {
    if (firstOrLast === returnFirstTwoDrivers) {
        return drivers.slice(0, 2);
    }else if (firstOrLast === returnLastTwoDrivers) {
        return drivers.slice(2);
    }
}
