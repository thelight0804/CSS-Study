// display modal when click listen button
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectSongBtn = document.querySelectorAll(".song button");

for (var btn of selectSongBtn){
    btn.addEventListener('click', ()=>{
        backdrop.style.display = "block";
        modal.style.display = "block";
    })
}

// hide modal when click no button
var selectNoBtn = document.querySelector(".modal__action--negative");

selectNoBtn.addEventListener('click', ()=>{
    backdrop.style.display = "none";
    modal.style.display = "none";
})