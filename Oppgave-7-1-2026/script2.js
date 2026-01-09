async function hentKatt() {
    const res = await fetch('https://cataas.com/cat/gif?json=true');
    const data = await res.json();
    let container = document.getElementById('cat-image');
    const img = document.createElement('img');
    img.src = data.url;
    img.alt = "Random Cat Image";
    img.width = 400;
    container.appendChild(img);

    console.log(data.url);
}


hentKatt();

timer = setInterval(hentKatt, 3000)