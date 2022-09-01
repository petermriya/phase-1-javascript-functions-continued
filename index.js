const mondayWork = function (activity = "go to the office") {
    return ("This Monday, I will ${activity}.");
}
const satWork = function (activity= "work from home"){
    return ("Monday work (work from home)}.");
} 
function wrapAdjective (visual = '*'){
    return function (adj = 'special'){
        return "You are ${visual}$ {adj}${visual}!"
    }
}