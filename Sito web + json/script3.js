document.addEventListener('DOMContentLoaded', function() {
    // Carica i dati dal file JSON
    fetch('dati3.json')
        .then(response => response.json())
        .then(data => {
            // Popola la sezione intro
            const introDiv = document.createElement('div');
            const introTitle = document.createElement('h1');
            introTitle.className = "display-4 text-center text-primary mb-4";
            introTitle.textContent = data.intro.titolo;
            introDiv.appendChild(introTitle);

            const introParagraph = document.createElement('p');
            introParagraph.className = "lead text-muted text-center";
            introParagraph.textContent = data.intro.paragrafo;
            introDiv.appendChild(introParagraph);

            // Popola la sezione livelli OSI
            const levelsDiv = document.createElement('div');
            levelsDiv.className = "row";
            data.livelli.forEach(livello => {
                const levelCol = document.createElement('div');
                levelCol.className = "col-lg-6 mb-4";
                
                const card = document.createElement('div');
                card.className = "card shadow-lg";
                
                const cardHeader = document.createElement('div');
                cardHeader.className = "card-header bg-info text-white";
                const cardTitle = document.createElement('h5');
                cardTitle.className = "card-title";
                cardTitle.textContent = livello.titolo;
                cardHeader.appendChild(cardTitle);
                
                const cardBody = document.createElement('div');
                cardBody.className = "card-body";
                const cardText = document.createElement('p');
                cardText.className = "card-text";
                cardText.textContent = livello.descrizione;
                cardBody.appendChild(cardText);
                
                card.appendChild(cardHeader);
                card.appendChild(cardBody);
                levelCol.appendChild(card);
                levelsDiv.appendChild(levelCol);
            });

            // Popola la conclusione
            const conclusionDiv = document.createElement('div');
            const conclusionTitle = document.createElement('h2');
            conclusionTitle.className = "text-secondary mb-4";
            conclusionTitle.textContent = data.conclusione.titolo;
            conclusionDiv.appendChild(conclusionTitle);

            const conclusionParagraph = document.createElement('p');
            conclusionParagraph.textContent = data.conclusione.paragrafo;
            conclusionDiv.appendChild(conclusionParagraph);

            // Popola la sezione processo di comunicazione
            const processDiv = document.createElement('div');
            const processTitle = document.createElement('h3');
            processTitle.className = "text-secondary mb-4";
            processTitle.textContent = "Esempio di Processo di Comunicazione";
            processDiv.appendChild(processTitle);

            const ul = document.createElement('ul');
            data.processo_comunicazione.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            processDiv.appendChild(ul);

            // Aggiungi tutto al contenuto principale
            document.getElementById('osi-content').appendChild(introDiv);
            document.getElementById('osi-content').appendChild(levelsDiv);
            document.getElementById('osi-content').appendChild(conclusionDiv);
            document.getElementById('osi-content').appendChild(processDiv);

            // Popola il footer
            const footerText = document.getElementById("footer-text");
            footerText.textContent = "A cura di Xiaqiang Qiu - Classe 5F Informatica - ITIS \"VIOLA MARCHESINI\"";
        })
        .catch(error => console.error('Errore nel caricamento del JSON:', error));
});
