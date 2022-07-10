let key = "hPZ154Aa4V8zU3BdYabAMkDzLd1iWbmM";
const forma = document.querySelector("#forma");
forma.addEventListener("submit", findGifs);

function findGifs(event) {
    event.preventDefault();
    let search = document.querySelector("#search").value;
    fetch(`https://api.giphy.com/v1/gifs/search?&api_key=${key}&limit=5&q=${search}`)
        .then(response => response.json())
        .then(content => {
            let giphy = content.data
            row(giphy);
        })
        .catch(error => alert("Сервер не доступен. Подробнее: " +error));
}

function row(giphy) {
    let out = document.querySelector(".out");
    let output = '<div class="container">';
    giphy.forEach((giphy) => {
        output += `<img src="${giphy.images.downsized.url}"/>`;
    });
    out.innerHTML = output;
}