var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectSongBtn = document.querySelectorAll(".song button");

for (var btn of selectSongBtn){
    btn.addEventListener('click', ()=>{
        backdrop.style.display = "block";
        modal.style.display = "block";
    })
}