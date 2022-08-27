//axios

const API = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com",
    headers: {
        "Content-type": "application/json",
    }
});

//dynamic functions

searchBtn.addEventListener("click", () => {
    searchBar.classList.remove("inactive");
});

window.addEventListener("mouseup", (e) => {
    if (e.target != searchBar) {
        searchBar.classList.add("inactive");
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

        mainSectionMoviesContainer.appendChild(mainSectionMoviesImg);
        mainSectionMovies.appendChild(mainSectionMoviesContainer);
    });
}

getMovies()

//Call to Api films

async function getFilms() {
    const results = await API("/films");

    const films = results.data;
    films.forEach(film => {

        const mainSectionFilms = document.querySelector(".film-section-container");

        const mainSectionFilmsImg = document.createElement("img");
        mainSectionFilmsImg.classList.add("film-movies");
        mainSectionFilmsImg.setAttribute("src", "https://image.tmdb.org/t/p/bestv2/" + film.image);

        mainSectionFilms.appendChild(mainSectionFilmsImg)
    });
}

getFilms()

//call to API details

async function getDetails() {
    const results = await API("/films/2baf70d1-42bb-4437-b551-e5fed5a87abe");

    const films = results.data;
    films.forEach(film => {
        const detailSection = document.querySelector(".detai-section-container");

        const detailSectionImg = document.createElement("img");
        detailSectionImg.classList.add("detail-img");
        detailSectionImg.setAttribute("src", "https://image.tmdb.org/t/p/bestv2/" + film.image);

        const detailSectionInfo = document.querySelector("detail-info-container");
        const detailTitleJap = document.querySelector("detail-title-jap");
        detailTitleJap.setAttribute(film.original_title);
        const detailTitle = document.querySelector("detail-title");
        detailTitle.setAttribute(film.title);
        const detailText = document.querySelector("detail-text");
        detailText.setAttribute(film.description);
        const detailDirector = document.querySelector(".detail-director");
        detailDirector.setAttribute(film.director);
        const detailYear = document.querySelector(".detail-year");
        detailYear.setAttribute(film.release_date);
        const detailScore = document.querySelector(".detail-score");
        detailScore.setAttribute(film.rt_score);

        detailSectionInfo.appendChild(detailTitleJap);
        detailSectionInfo.appendChild(detailTitle);
        detailSectionInfo.appendChild(detailText);
        detailSectionInfo.appendChild(detailDirector);
        detailSectionInfo.appendChild(detailYear);
        detailSectionInfo.appendChild(detailScore);

        detailSection.appendChild(detailSectionInfo);
        detailSection.appendChild(detailSectionImg);


    });
}

getDetails();