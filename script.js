const form = document.getElementById("formulaire");
const acces = document.getElementById("acces");

// déjà inscrit
if(localStorage.getItem("afg_webinar")){
    form.style.display="none";
    acces.style.display="block";
}

form.addEventListener("submit", e=>{
    e.preventDefault();

    const data={
        nom:nom.value,
        email:email.value,
        tel:tel.value,
        date:new Date()
    };

    localStorage.setItem("afg_webinar",JSON.stringify(data));

    form.style.display="none";
    acces.style.display="block";
});