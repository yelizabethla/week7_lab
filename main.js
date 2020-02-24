/*** Object Constructors ***/
function Goat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "babygoat.jpg";
  this.type = "Goat";
}

function WTiger(name, age) {
  this.name = name;
  this.age = age;
  this.image = "whitetiger.png"
  this.type = "WTiger";
}

function Deer(name, age) {
  this.name = name;
  this.age = age;
  this.image = "deer.jpg"
  this.type = "Deer";
}

/*** Global Variables ***/
var animals = [new Goat(), new WTiger(), new Deer()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Goat) 
  {
    return new Goat(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof WTiger) 
  {
    return new WTiger(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Deer) 
  {
    return new Deer(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
function onLoad() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + " years old";
  document.getElementById("animal-img").setAttribute("src", animal.image)

};
