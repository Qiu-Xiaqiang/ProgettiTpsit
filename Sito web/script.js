// Aggiunta della data di aggiornamento dinamica nel footer
document.addEventListener("DOMContentLoaded", () => {
    const lastUpdate = new Date().toLocaleString("it-IT", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
    document.getElementById("last-update").textContent = `Ultimo aggiornamento: ${lastUpdate}`;
});