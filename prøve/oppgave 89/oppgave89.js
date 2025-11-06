const personer = [
    {
        navn: "Jo Bjørnar Hausnes",
        yrke: "Trailersjåfør",
        lønn: 120938
    },
    {
        navn: "Hilde Anita Larsen",
        yrke: "Lærer",
        lønn: 13837
    }
]
let antall= 0
function sammenlignLønn(a, b){
    for (let i=0; i<a.length;i++){
            if (a[i].lønn > b){
                antall++
            }
    }

}

sammenlignLønn(personer, 120000)
console.log("antall personer over lønnsnivået er: " + antall)