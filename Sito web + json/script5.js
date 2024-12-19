// Carica il contenuto dal file JSON e aggiorna la pagina
fetch('dati5.json')
    .then(response => response.json())
    .then(data => {
        // Popola il testo introduttivo
        document.getElementById('intro-text').innerText = data['intro-text'];

        // Sezione TCP
        document.getElementById('tcp-title').innerText = data.tcp.title;
        document.getElementById('tcp-description').innerText = data.tcp.description;
        document.getElementById('tcp-features-title').innerText = data.tcp['features-title'];
        const tcpFeatures = document.getElementById('tcp-features');
        data.tcp.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
            tcpFeatures.appendChild(li);
        });
        document.getElementById('tcp-image').src = data.tcp.image;

        // Sezione UDP
        document.getElementById('udp-title').innerText = data.udp.title;
        document.getElementById('udp-description').innerText = data.udp.description;
        document.getElementById('udp-features-title').innerText = data.udp['features-title'];
        const udpFeatures = document.getElementById('udp-features');
        data.udp.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
            udpFeatures.appendChild(li);
        });
        document.getElementById('udp-image').src = data.udp.image;

        // Confronto TCP vs UDP
        document.getElementById('comparison-title').innerText = data.comparison.title;
        document.getElementById('tcp-comparison-title').innerText = data.comparison['tcp-comparison-title'];
        const tcpComparison = document.getElementById('tcp-comparison');
        data.comparison['tcp-comparison'].forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-arrow-right"></i> ${item}`;
            tcpComparison.appendChild(li);
        });
        document.getElementById('udp-comparison-title').innerText = data.comparison['udp-comparison-title'];
        const udpComparison = document.getElementById('udp-comparison');
        data.comparison['udp-comparison'].forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-arrow-right"></i> ${item}`;
            udpComparison.appendChild(li);
        });

        // Uso di TCP e UDP
        document.getElementById('usage-title').innerText = data.usage.title;
        document.getElementById('usage-text').innerText = data.usage.text;
        document.getElementById('tcp-usage-title').innerText = data.usage['tcp-usage-title'];
        const tcpUsage = document.getElementById('tcp-usage');
        data.usage['tcp-usage'].forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            tcpUsage.appendChild(li);
        });
        document.getElementById('udp-usage-title').innerText = data.usage['udp-usage-title'];
        const udpUsage = document.getElementById('udp-usage');
        data.usage['udp-usage'].forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            udpUsage.appendChild(li);
        });

        // Ultimo aggiornamento
        document.getElementById('last-update').innerText = data['last-update'];
    })
    .catch(error => console.error('Errore nel caricamento del file JSON:', error));
