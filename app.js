let btn = document.getElementById("btn_toggle");
let btnIcon = document.getElementById("btn_icon");
let reponse = document.getElementById('reponse');

const toggleResponse = () => {
    if(btnIcon.className === "fa-solid fa-chevron-down"){
     btnIcon.className = "fa-solid fa-chevron-up";
    reponse.style.display = "block";   
    } else {
    btnIcon.className = "fa-solid fa-chevron-down";
    reponse.style.display = "none";
    }
    
};
btn.addEventListener("click", toggleResponse);