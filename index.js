function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
  }
function leashDog(dogName, dogBreed) {
    console.log(`put leash on ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`;
  }
function walkToPark(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} to the park`);
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw a frisbee to ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }
function walkHome(dogName, dogBreed) {
    console.log(`Take ${dogName} the ${dogBreed} home`);
    return `Walk home with ${dogName} the ${dogBreed}`;
  }
function unleashDog(dogName, dogBreed) {
    console.log(`unleash the beast`);
    return `Unleash ${dogName} the ${dogBreed}`
  }

  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

  function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
  }
