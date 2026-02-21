const form = document.getElementById("formulaire");
const msg = document.getElementById("msg");

const API = "COLLE_ICI_URL_WEBAPP";

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;

    msg.innerText = "Enregistrement...";

    try{
        const res = await fetch(`${API}?nom=${nom}&email=${email}&tel=${tel}`);
        const data = await res.json();

        if(data.status === "success"){
            msg.innerText = "Inscription confirmée ✔";
            form.reset();
        }else{
            msg.innerText = "Erreur lors de l'inscription";
        }

    }catch(err){
        msg.innerText = "Impossible de contacter le serveur";
    }
});
