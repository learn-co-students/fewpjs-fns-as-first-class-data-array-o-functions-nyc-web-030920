const wakeDog = function wakeDog(name, breed){
    return `Wake ${name} the ${breed}`;
}
const leashDog = function leashDog(name, breed){
    return `Leash ${name} the ${breed}`;
}
const walkToPark = function walkToPark(name, breed){
    return `Walk to the park with ${name} the ${breed}`;
}
const throwFrisbee = function throowFrisbee(name, breed){
    return `Throw the frisbee for ${name} the ${breed}`;
}
const walkHome  = function walkHome(name, breed){
    return `Walk home with ${name} the ${breed}`;
}
const unleashDog = function unleashDog(name, breed){
    return `Unleash ${name} the ${breed}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
function exerciseDog(name, breed){
    return routine.map(function(a){
        return a(name,breed)
    });
}





