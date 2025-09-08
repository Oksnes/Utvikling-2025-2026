document.getElementById("button").addEventListener("click", function() {
    let userInput = prompt("Skriv inn et binært tall:");
    alert("Tallet ditt blir: " + parseInt(userInput, 2) );
});

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let navnforskjell = Math.abs(parseInt(name1.length) - parseInt(name2.length));

    document.getElementById("result").innerText = "Forskjellen i lengde på navnene er: " + navnforskjell + " bokstaver.";
    // alert("Forskjellen i lengde på navnene er: " + navnforskjell + " bokstaver.");

});

document.getElementById("ageVerification").addEventListener("click", function() {
    let age = prompt("Skriv inn alderen din:");
    if (age >= 18) {
        alert("Du er voksen.");
        document.getElementById("voksenBilde").src = "erm.png";
    } else if (age >= 13) {
        alert("Du er ikke voksen.");
    } else if (age <= 12) {
        window.location.href = "https://google.com";
        // window.close()
    }

});