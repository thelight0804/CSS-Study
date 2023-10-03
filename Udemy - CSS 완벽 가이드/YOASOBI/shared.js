// display modal when click listen button
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectSongBtn = document.querySelectorAll(".song button");

for (var btn of selectSongBtn){
    btn.addEventListener('click', () => {
        // backdrop.style.display = "block";
        // modal.style.display = "block";
        // modal.className = "open";
        backdrop.classList.add("open");
        modal.classList.add("open");
    })
}

// hide modal when click no button
var selectNoBtn = document.querySelector(".modal__action--negative");

selectNoBtn.addEventListener('click', () => {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    backdrop.classList.remove("open");
    modal.classList.remove("open");
})

// open mobile toggle navigation
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener('click', () => {
    // backdrop.style.display = "block";
    // mobileNav.style.display = "block";
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
})

// close mobile toggle navigation

backdrop.addEventListener('click', () => {
    // backdrop.style.display = "none";
    mobileNav.style.display = "none";
    // modal.style.display = "none";
    backdrop.classList.remove("open");
    modal.classList.remove("open");
    mobileNav.classList.remove("open");
})