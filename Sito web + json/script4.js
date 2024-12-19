document.addEventListener('DOMContentLoaded', function () {
    // Carica il file dati4.json
    fetch('dati4.json')
        .then(response => response.json())
        .then(data => {
            // Carica la sezione introduttiva
            const introduzione = data.introduzione;
            document.querySelector('#introduzione-titolo').innerText = introduzione.titolo;
            document.querySelector('#introduzione-descrizione').innerText = introduzione.descrizione;

            // Carica i tipi di socket
            const tipiSocket = data.tipiSocket;
            const section = document.querySelector('#tipi-socket-section');
            tipiSocket.forEach(socket => {
                const cardHTML = `
                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm">
                            <img src="${socket.immagine}" class="card-img-top socket-img" alt="Socket ${socket.tipo}">
                            <div class="card-body">
                                <h5 class="card-title">Socket ${socket.tipo}</h5>
                                <p class="card-text">${socket.descrizione}</p>
                                <ul>
                                    ${socket.caratteristiche.map(car => `<li>${car}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
                section.querySelector('#tipi-socket-row').innerHTML += cardHTML;
            });

            // Carica la sezione funzionamento
            const funzionamento = data.funzionamento;
            const funzionamentoList = document.querySelector('#funzionamento-list');
            funzionamento.forEach(step => {
                const listItem = `
                    <li><strong>${step.titolo}:</strong> ${step.descrizione}</li>
                `;
                funzionamentoList.innerHTML += listItem;
            });
        })
        .catch(error => console.error('Errore nel caricamento dei dati JSON:', error));
});
