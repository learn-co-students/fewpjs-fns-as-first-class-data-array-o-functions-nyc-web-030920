let wakeDog = function(dogName, dogBreed) {
    let action = `Wake ${dogName} the ${dogBreed}` 
    console.log(action)
    return action
}
let leashDog = function(dogName, dogBreed) {
    let action = `Leash ${dogName} the ${dogBreed}` 
    console.log(action)
    return action
}
let walkToPark = function(dogName, dogBreed) {
    let action = `Walk to the park with ${dogName} the ${dogBreed}` 
    console.log(action)
    return action
}
let throwFrisbee = function(dogName, dogBreed) {
    let action = `Throw the frisbee for ${dogName} the ${dogBreed}` 
    console.log(action)
    return action
}
let walkHome = function(dogName, dogBreed) {
    let action = `Walk home with ${dogName} the ${dogBreed}` 
    console.log(action)
    return action
}
let unleashDog = function(dogName, dogBreed) {
    let action = `Unleash ${dogName} the ${dogBreed}` 
    console.log(action)
    return action
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog (dogName, dogBreed) {

    return routine.map(fun => fun(dogName, dogBreed) )

    // effectively is running -
        // fun = array element 
        //     fun = unleashDog - pass in arguments


}