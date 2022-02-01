// code your solution here
function saturdayFun(activity) {
    if (typeof (activity) === 'undefined') {
        return 'This Saturday, I want to roller-skate!'
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}
const mondayWork = function (activity) {
    if (typeof (activity) === 'undefined') {
        return 'This Monday, I will go to the office.'
    } else {
        return `This Monday, I will ${activity}.`
    }
}
function wrapAdjective(param2 = '*') {
    return function(param1 = 'special') {
        return `You are ${param2}${param1}${param2}!`
    }
}