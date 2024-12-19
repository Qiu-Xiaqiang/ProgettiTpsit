document.addEventListener("DOMContentLoaded", () => {
    // Impostazione dell'ultimo aggiornamento con la data corrente
    const lastUpdate = new Date().toLocaleString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    document.getElementById("last-update").textContent = `Ultimo aggiornamento: ${lastUpdate}`;
});

// Carica i contenuti dal file JSON
fetch('dati.json')
    .then(response => response.json())
    .then(data => {
        // Navbar
        document.querySelector('.navbar-brand').textContent = data.navbar.home;
        const navbarLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
        navbarLinks[0].textContent = data.navbar.home;
        navbarLinks[1].textContent = data.navbar.socket;
        navbarLinks[2].textContent = data.navbar.osi;
        navbarLinks[3].textContent = data.navbar.tcpUdp;
        navbarLinks[4].textContent = data.navbar.glossary;

        // Hero Section
        document.querySelector('main h1').textContent = data.hero.title;
        document.querySelector('main p.lead').textContent = data.hero.lead;

        // Descrizione dei livelli OSI
        document.querySelector('main h2').textContent = data.main.sectionTitle;
        document.querySelector('main p').textContent = data.main.sectionDescription;

        // Cards Section
        const cardElements = document.querySelectorAll('.card');
        data.cards.forEach((card, index) => {
            const cardElement = cardElements[index];
            cardElement.querySelector('.card-title').textContent = card.title;
            cardElement.querySelector('.card-text').textContent = card.text;
        });
    })
