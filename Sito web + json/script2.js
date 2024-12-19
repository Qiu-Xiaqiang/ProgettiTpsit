document.addEventListener('DOMContentLoaded', function() {
    // Carica il file JSON contenente le definizioni
    fetch('dati2.json')
        .then(response => response.json())
        .then(data => {
            const glossaryList = document.getElementById('glossary-list');

            // Aggiungi i termini al glossario
            Object.keys(data).forEach(term => {
                const termElement = document.createElement('div');
                termElement.classList.add('list-group-item');

                const termText = document.createElement('span');
                termText.classList.add('term');
                termText.textContent = term.charAt(0).toUpperCase() + term.slice(1);
                termText.onclick = function() {
                    toggleDefinition(term, data[term]); // Usa il nome del termine
                };

                const definitionBox = document.createElement('div');
                definitionBox.id = term + '-definition'; // ID dinamico basato sul termine
                definitionBox.classList.add('definition-box');
                termElement.appendChild(termText);
                termElement.appendChild(definitionBox);

                glossaryList.appendChild(termElement);
            });
        })
        .catch(error => {
            console.error('Errore nel caricamento del glossario:', error);
        });

    // Funzione per alternare la visualizzazione della definizione
    function toggleDefinition(term, definition) {
        const box = document.getElementById(term + '-definition'); // Corretto abbinamento dell'ID
        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";
            box.textContent = definition;
        }
    }
});
