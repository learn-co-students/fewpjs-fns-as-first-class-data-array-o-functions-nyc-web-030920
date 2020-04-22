
const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function wakeDog(dog, breed){
    const result = `Wake ${dog} the ${breed}`
    console.log(result);
    return result;
}

function leashDog(dog, breed){
    const result = `Leash ${dog} the ${breed}`
    console.log(result);
    return result;
}

function walkToPark(dog, breed){
    const result = `Walk to the park with ${dog} the ${breed}`
    console.log(result);
    return result;
}

function throwFrisbee(dog, breed){
    const result = `Throw the frisbee for ${dog} the ${breed}`
    console.log(result);
    return result;
}

function walkHome(dog, breed){
    const result = `Walk home with ${dog} the ${breed}`
    console.log(result);
    return result;
}

function unleashDog(dog, breed){
    const result = `Unleash ${dog} the ${breed}`
    console.log(result);
    return result;
}

function exerciseDog(dog, breed){
    return routine.map(func => {
        return func(dog, breed);
    });
}