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