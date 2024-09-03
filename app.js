function depozitCemi(rublHesabi, dollarHesabi, mezenne) {
  
  let Rublla = dollarHesabi * mezenne;
  let umumilikdeRubl = rublHesabi + Rublla;
  
  console.log(`Bütün: ${umumilikdeRubl} rubl.`);
}


let rublHesabi = 1200;
let dollarHesabi = 20;
let mezenne = 75;
console.log(depozitCemi(rublHesabi, dollarHesabi, mezenne));
