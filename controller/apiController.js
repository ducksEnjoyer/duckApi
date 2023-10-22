const path = require("path");
const resolve = path.resolve
const host = "https://qwacky.onrender.com";
const ducksWithStrengths = [ 
  {  name: "Mallard Duck", 
    species: "Anas platyrhynchos",
    color: "Mottled brown with iridescent green head",
    habitat: "Ponds, lakes, and rivers",
    diet: "Omnivorous",
    img : host + "/img/qwack.webp",
    strength: 8,    
   
  },
  {
    name: "Wood Duck",
    species: "Aix sponsa",
    color: "Colorful with iridescent green, blue, and purple",
    habitat: "Wooded wetlands and swamps",
    diet: "Omnivorous",
    img : host + "/img/ducka.jpg",
    strength: 7, 
  },
  {
    name: "Pekin Duck",
    species: "Anas platyrhynchos domesticus",
    color: "White with orange bill and legs",
    habitat: "Domesticated, often on farms",
    diet: "Omnivorous",
    img : host + "/img/ducko.jpg",
    strength: 5, 
  },
  {
    name: "Northern Pintail",
    species: "Anas acuta",
    color: "Long neck, slender with brown and white plumage",
    habitat: "Wetlands and marshes",
    diet: "Mainly herbivorous",
    img : host + "/img/ducky.jpg",
    strength: 6, 
  },
  {
    name: "Mandarin Duck",
    species: "Aix galericulata",
    color: "Exotic, with colorful patterns",
    habitat: "East Asian forests and wetlands",
    diet: "Omnivorous",
    img : host + "/img/ducku.jpg",
    strength: 9, 
  },
];


const allDucks = (req, res) => {
    res.json(ducksWithStrengths)
} 
const highestDuck = (req, res) => {
  let highestDuck = {}
  let highestStrenght = 0
  for (let index = 0; index < ducksWithStrengths.length; index++) {
     if (ducksWithStrengths[index].strength > highestStrenght){
        highestDuck = ducksWithStrengths[index]
     } 
    
  } 
  
  res.json(highestDuck)
}
const randomDuck = (req, res) => {
  let randomNumber = Math.floor(Math.random()*5)
  const randomDuck = ducksWithStrengths[randomNumber] 

  res.json(randomDuck)
}

const ducksBetween = (req, res) => {
  let ducksArray = []
  const max = req.query.max;
  const min = req.query.min;
  
  for (let index = 0; index < ducksWithStrengths.length; index++) {
    if (ducksWithStrengths[index].strength >= min && ducksWithStrengths[index].strength <= max){
       
       ducksArray.push(ducksWithStrengths[index])
    } 
   
 } 
 res.json(ducksArray)
};

  console.log(allDucks)
module.exports =  {
    allDucks,
    highestDuck,
    randomDuck,
    ducksBetween 
};
