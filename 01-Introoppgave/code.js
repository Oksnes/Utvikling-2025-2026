let form = document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let farge = document.getElementById("farge").value;
    document.body.style.backgroundColor = farge;
})