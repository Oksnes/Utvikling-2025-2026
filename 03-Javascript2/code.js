let tallArray = [];


for (let i = 0; i < 20000; i++) {
    tallArray.push(Math.ceil(Math.random() * 100));
}
console.log(tallArray);


let tallOverFem = tallArray.filter(tall => tall > 5).length;
console.log("Antall tall over 5:", tallOverFem);


let tallFire = tallArray.filter(tall => tall == 4).length;
console.log("Antall tall som er 4:", tallFire);


let sum = tallArray.reduce((acc, curr) => acc + curr, 0);
console.log("Summen av alle tallene i arrayet er:", sum);


let gjennomsnitt = sum / tallArray.length;
console.log("Gjennomsnittet av tallene i arrayet er:", gjennomsnitt);


let maks = Math.max(...tallArray);
console.log("Det høyeste tallet i arrayet er:", maks);


let min = Math.min(...tallArray);
console.log("Det laveste tallet i arrayet er:", min);