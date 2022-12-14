//axios

const API = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com",
    headers: {
        "Content-type": "application/json",
    }
});


//hidden menu

function openMenu() {
    hiddenMenuOpen.style.marginRight = "-2%";
}

window.addEventListener("mouseup", (e) => {
    if (e.target != hiddenMenuOpen) {
        closeMenu();
    }
});

function closeMenu() {
    hiddenMenuOpen.style.marginRight = "-200%";
}

//calls to APÍ

async function getMovies() {
    const results = await API("/films");

    const films = results.data.slice(0, 6);
    films.forEach(film => {

        const mainSectionMovies = document.querySelector(".slider-track");

        const mainSectionMoviesContainer = document.createElement("div")
        mainSectionMoviesContainer.classList.add("slide");

        const mainSectionMoviesImg = document.createElement("img");
        mainSectionMoviesImg.classList.add("main-section-img");
        mainSectionMoviesImg.classList.add("main-section-img-size");
        mainSectionMoviesImg.setAttribute("src", "https://image.tmdb.org/t/p/bestv2/" + film.image);
        mainSectionMoviesImg.addEventListener("click", () => {
            location.hash = "#movie=" + film.id;
            location.reload();
        });

        mainSectionMoviesContainer.appendChild(mainSectionMoviesImg);
        mainSectionMovies.appendChild(mainSectionMoviesContainer);
    });
}



//Call to Api films

async function getFilms() {
    const results = await API("/films");

    const films = results.data;
    films.forEach(film => {

        const mainSectionFilms = document.querySelector(".film-section-container");

        const mainSectionFilmsImg = document.createElement("img");
        mainSectionFilmsImg.classList.add("film-movies");
        mainSectionFilmsImg.setAttribute("src", "https://image.tmdb.org/t/p/bestv2/" + film.image);
        mainSectionFilmsImg.addEventListener("click", () => {
            location.hash = "#movie=" + film.id;
            location.reload();
        });

        mainSectionFilms.appendChild(mainSectionFilmsImg)
    });
}



//call to API details

async function getDetail(movieId) {

    const results = await API("/films/" + movieId);

    const films = results.data;



    const detailImg = document.querySelector(".detail-movie-img");
    detailImg.setAttribute("src", "https://image.tmdb.org/t/p/bestv2/" + films.image);


    const detailTitleJap = document.querySelector(".detail-section-title-jap");
    detailTitleJap.textContent = films.original_title;

    const detailTitle = document.querySelector(".detail-section-title");
    detailTitle.textContent = films.title;

    const detailText = document.querySelector(".detail-text");
    detailText.textContent = films.description;

    const detailDirector = document.querySelector(".detail-director");
    detailDirector.textContent = films.director;

    const detailYear = document.querySelector(".detail-year");
    detailYear.textContent = films.release_date;

    const detailScore = document.querySelector(".detail-score");
    detailScore.textContent = " ⭐" + films.rt_score;

}