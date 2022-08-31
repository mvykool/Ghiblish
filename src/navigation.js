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


//desktop Menu

filmFromMenuDesktop.addEventListener("click", () => {
    location.hash = "#films";
    window.location.reload();
});

homeFromMenuDesktop.addEventListener("click", () => {
    location.hash = "#home";
    window.location.reload();

});


//back button

backButton.addEventListener("click", () => {

    history.back();
    window.location.href = document.referrer;
});

//back to top

const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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
    upButton.classList.add("inactive");
}

function filmPage() {
    getFilms();

    homeSection.classList.add("inactive");
    movieDetails.classList.add("inactive");
    filmsSection.classList.remove("inactive");
    backButton.classList.remove("inactive");
    upButton.classList.remove("inactive");

}

function moviePage() {

    homeSection.classList.add("inactive");
    movieDetails.classList.remove("inactive");
    filmsSection.classList.add("inactive");
    backButton.classList.remove("inactive");
    footerSection.classList.add("inactive");
    upButton.classList.add("inactive");


    const [urlBaseOfCategory, movieId] = location.hash.split("=");

    getDetail(movieId);
}