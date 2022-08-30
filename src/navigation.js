window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchanged", navigator, false);

//side Menu

filmFromMenu.addEventListener("click", () => {
    location.hash = "#films";
    window.location.reload();
});

homeFromMenu.addEventListener("click", () => {
    location.hash = "#home";
    window.location.reload();

});


//back button

backButton.addEventListener("click", () => {

    history.back();
    window.location.href = document.referrer;
});

//movie details

movieDetails.addEventListener("click", () => {
    location.hash = "#movie=";

    document.body.scrollTo(0, 0);
    window.location.reload();

});

//navigation

function navigator() {
    if (location.hash.startsWith("#films")) {
        filmPage()
    } else if (location.hash.startsWith("#movie=")) {
        moviePage()
    } else {
        homePage()
    }
}




//functions

function homePage() {
    getMovies();


    movieDetails.classList.add("inactive");
    filmsSection.classList.add("inactive");
    backButton.classList.add("inactive");
}

function filmPage() {
    getFilms();

    homeSection.classList.add("inactive");
    movieDetails.classList.add("inactive");
    filmsSection.classList.remove("inactive");
    backButton.classList.remove("inactive");
}

function moviePage() {

    homeSection.classList.add("inactive");
    movieDetails.classList.remove("inactive");
    filmsSection.classList.add("inactive");
    backButton.classList.remove("inactive");
    footerSection.classList.add("inactive");

    const [urlBaseOfCategory, movieId] = location.hash.split("=");

    getDetail(movieId);
}