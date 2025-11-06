const temperatur = [-10, 4, 7, 13, -9, 6, -11, -12, 14];

let antall= 0

for (let i=0; i<temperatur.length; i++){
    if (temperatur[i] < 0) {
        antall++
    }
}
console.log(antall)