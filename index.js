// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2*Math.PI*radius);
}
//console.log(orbitCircumference(2))

// Code your missionDuration function here:
function missionDuration(orbits, radius = 2000, speed =28000) {
  return Math.round(((orbitCircumference(radius)*orbits)/speed)*100)/100;
}

// console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let out = [];
  out.push(arr[Math.floor(Math.random()*arr.length)]);
  
  return out;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let hours = missionDuration(3, 1000, 100);
  let o2 = Math.round(candidate[0].o2Used(hours)*1000)/1000
return `${candidate[0].name} will perform the spacewalk, which will last ${hours} hours and require ${o2} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE,candidateB,candidateD,candidateF];

let captain = selectRandomEntry(crew);


// console.log(oxygenExpended(captain))

function smallestOxygen(array) {
  let newArray = [];
  let min = 0
  let candidate = ""
    for (i=0; i <array.length; i++) {
      newArray.push(crew[i].o2Used(1));
    }
  min = Math.min(...newArray)
  candidate = array[newArray.indexOf(min)].name
return candidate;
}
console.log(smallestOxygen(crew))

