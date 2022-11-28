let spag = 400;
let guan = 250;
let egg = 6 * 20;
let peco = 50;
let bpepp = 4;

// add water weight

let ingredients = spag + guan + egg + peco + bpepp;
 

let dish = null;
let store = null;
let mix = null;
let aside = null;
let cool = null;
let cook = null;

let carbonara = null;

console.log("Spaghetti alla Carbonara Recipe:\n");
console.log("Ingedients for 4 people\n");
console.log("spaghetti 400g\n")
console.log("guanciale 250g\n")
console.log("very fresh egg yolks 6 (20g each)\n")
console.log("aged grated Pecorino Romano cheese 50g\n")
console.log("raw black pepper 4g\n")

console.log("\nTotal Ingredients Weight:", ingredients);


// INSTRUCTIONS
console.log("\nINSTRUCTIONS\n");


// cut guanciale into 1cm layer then long strips, guan
console.log("\nCutting the guanciale into 1cm layers & long strips\n");
store += guan;
console.log(store);


// combine egg yolks with Pecorino Romano, egg + peco
console.log("\nCombining the egg yolks and Pecorino Romano\n");
mix += egg + peco;
console.log(mix);


// roast black pepper, 20% to egg + peco, 80% store
console.log("\nRoast the black pepper until it smoke & sizzles, combine some with eggs & cheese, put the rest aside\n");
mix += bpepp * .2;
aside += bpepp * .8 ;
console.log(mix);
console.log(aside);


// cook guan - 3 minutes medium heat - 1 minute high heat
console.log("\nBrown the strips of guanciale for 3 minutes at medium heat, then 1 minune on high heat til crisp, then turn off the heat, take out the guanciale, leaving only the grease on the pan cool down.\n");
cook += + guan;
store = null;
console.log(store);
console.log(cook);

store += + guan;
cook = null;

console.log(cook);
console.log(store);


// cook pasta w pinch o salt & add water to cooked pasta weight
console.log ("\nCook the pasta with a pinch of salt in the water (guanciale is already very salty)\n");
cook += + spag *2;
console.log (cook);
// add salt weight 0.36g



// set aside ladle of water
console.log ("\nset aside a ladleful of the pasta water before draining it,\n");
// cook = spag +25;
console.log (cook);
// add water weight 25g


// drain the pasta
console.log ("\nthen drain the pasta once it is cooked al dente.\n");
cool += + cook;
cook += - spag;
cook = null;

console.log(cook);
console.log(cool);

// 2 spoons of water into frying pan w guan - heat 
console.log ("\nPour 2 spoons of the reserved hot water into the part of the frying pan containing the cooled guanciale and turn on the heat this will create a creamy sauce with the pasta starch contained in that water. TURN OFF THE HEAT AND SET ASIDE for 1 minute,\n")
cook += + store + 25;
store = null;
console.log(store);


// transfer pasta to pan and mix
console.log ("\nthen transfer the pasta to the same pan and mix together.\n");
cook += + cool;
console.log(cook);
cool = null;

// add egg + peco + 20% bpepp
console.log ("\nAdd the yolk and cheese mixture, stirring rapidly. In the warm pan with the hot pasta, the eggs will cook gently and become creamy.\n")
cook += + mix;
mix = null;

// stir rapidly, cook gently etc
console.log ("\nIt is important to do this part quickly to prevent the yolks from congealing and taking on the texture of scrambled eggs.\n");
console.log (cook);


// add bpepp remainder
console.log("\nAdd the remaining roasted black pepper and serve immediately.\n");
cook += + aside;
aside = null;

// serve

carbonara = + cook;
cook = null;
console.log("\nHere is the total value weight of the Carbonara:", carbonara);

console.log("\nContainer remainders:\n")
console.log(dish);
console.log(store);
console.log(mix);
console.log(aside);
console.log(cool);
console.log(cook);