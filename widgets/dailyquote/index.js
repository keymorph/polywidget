//URL Reference for object data retrieval: https://theysaidso.com/api/#jod-json

fetch("https://quotes.rest/qod?category=inspire")
    .then(res => res.json())
    .then(data => {
        let quote = data.contents.quotes[0].quote;
        let author = data.contents.quotes[0].author;
        let date = parseInt(data.contents.quotes[0].date, "-");

        let qod = `"${quote}" - ${author}, ${date}`;
        document.querySelector("#quote").innerHTML = qod;
    }
    );