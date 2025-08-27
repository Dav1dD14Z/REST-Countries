function darkMode(){
    const body = document.body;
    body.classList.toggle("dark-mode");

    const button = document.querySelector(".header__container--darkMode Button");
    if(body.classList.contains("dark-mode")){
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
}