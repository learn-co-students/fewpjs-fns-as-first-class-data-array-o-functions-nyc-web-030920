var wakeDog = function(dogName, dogBreed){
   const message = `Wake ${dogName} the ${dogBreed}`;
    console.log(message);
   return message;
}

var leashDog = function(dogName, dogBreed){
    const message = `Leash ${dogName} the ${dogBreed}`;
    console.log(message);
    return message
}

var walkToPark = function(dogName, dogBreed){
    const message = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(message);
    return message
}

var throwFrisbee = function(dogName, dogBreed){
    const message = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(message);
    return message
}

var walkHome = function(dogName, dogBreed){
    const message = `Walk home with ${dogName} the ${dogBreed}`
    console.log(message);
    return message
}

var unleashDog = function(dogName, dogBreed){
    const message = `Unleash ${dogName} the ${dogBreed}`
    console.log(message);
    return message
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

var exerciseDog = function(dogName, dogBreed){
    let results = [];
    for(const exercise of routine){
        let solution = exercise(dogName, dogBreed);
        results.push(solution);
    }
    return results;
}