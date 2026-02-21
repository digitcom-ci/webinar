const form = document.getElementById("formulaire");
const msg = document.getElementById("msg");
const btn = form.querySelector("button");

const API = "https://script.google.com/macros/s/AKfycbzsj3smsaX9Z7xk7C62AZW-xx8zmQ8_iDUJoZdUfA7v4n738Vkluqb0dw8_0hr2lB80/exec";

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;

    // UI loading
    btn.classList.add("loading");
    btn.innerText="";
    msg.className="";
    msg.innerText="Enregistrement...";
    msg.classList.add("show");

    try{

        const res = await fetch(`${API}?nom=${encodeURIComponent(nom)}&email=${encodeURIComponent(email)}&tel=${encodeURIComponent(tel)}`);
        const data = await res.json();

        if(data.status === "success"){
            msg.innerText="Inscription confirmée ✔";
            msg.classList.add("success");
            form.reset();
        }else{
            msg.innerText="Erreur lors de l'inscription";
            msg.classList.add("error");
        }

    }catch(err){
        msg.innerText="Impossible de contacter le serveur";
        msg.classList.add("error");
    }

    // fin loading
    btn.classList.remove("loading");
    btn.innerText="S'inscrire";
});
