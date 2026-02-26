const form = document.getElementById("formulaire");
const msg = document.getElementById("msg");
const btn = form.querySelector("button");

const API = "https://script.google.com/macros/s/AKfycbzsj3smsaX9Z7xk7C62AZW-xx8zmQ8_iDUJoZdUfA7v4n738Vkluqb0dw8_0hr2lB80/exec";

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("tel").value.trim();

    if (!nom || !email || !tel) {
        msg.innerText = "Veuillez remplir tous les champs";
        msg.className = "show error";
        return;
    }

    // UI loading
    btn.classList.add("loading");
    btn.innerText = "";
    msg.className = "show";
    msg.innerText = "Enregistrement en cours...";

    try {

        const res = await fetch(`${API}?nom=${encodeURIComponent(nom)}&email=${encodeURIComponent(email)}&tel=${encodeURIComponent(tel)}`);
        const data = await res.json();

        if (data.status === "success") {

            msg.innerText = "Inscription confirmée";
            msg.className = "show success";

            form.reset();

            // Redirection après 1.5 seconde
            setTimeout(() => {
                window.location.href = "webinaire.html";
            }, 1500);

        } else {

            msg.innerText = "Erreur lors de l'inscription";
            msg.className = "show error";
        }

    } catch (err) {

        msg.innerText = "Impossible de contacter le serveur";
        msg.className = "show error";
    }

    // Fin loading
    btn.classList.remove("loading");
    btn.innerText = "S'inscrire";
});