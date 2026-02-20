const formulaire = document.getElementById('formulaire');
const acces = document.getElementById('acces');
const btnZoom = document.getElementById('btnZoom');

// Lien Google Apps Script qui enregistre les données
const SHEET_URL = "https://script.google.com/macros/s/TON_SCRIPT_ID/exec";

// Lien Zoom statique ou généré par le script
const ZOOM_LINK = "https://zoom.us/j/TON_NUMERO_DE_REUNION"; 

formulaire.addEventListener('submit', function(e){
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;

    // envoi des données à Google Sheet
    fetch(`${SHEET_URL}?nom=${encodeURIComponent(nom)}&email=${encodeURIComponent(email)}&tel=${encodeURIComponent(tel)}`)
    .then(response => response.json())
    .then(data => {
        if(data.result === "success"){
            // affiche la div accès
            acces.style.display = 'block';
            btnZoom.href = ZOOM_LINK; // attribue le lien Zoom
        } else {
            alert("Erreur lors de l'inscription, réessayez.");
        }
    })
    .catch(err => {
        console.error(err);
        alert("Impossible de se connecter au serveur.");
    });
});
