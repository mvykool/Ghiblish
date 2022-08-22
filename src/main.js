//axios

const API = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com",
    headers: {
        "Content-type": "application/json",
    }
});

async function getMovies() {
    const results = await API("/films");

    const films = results.data.slice(0, 6);
    films.forEach(film => {

        const title = document.querySelector(".title");

        title.textContent = film.title;


    });
}