document.addEventListener('DOMContentLoaded', () => {
    const driversContainer = document.getElementById('drivers-container');

    fetch('https://f1api.dev/api/drivers')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(driver => {
                const driverCard = document.createElement('div');
                driverCard.className = 'driver-card';
                driverCard.innerHTML = `
                    <h2>${driver.name}</h2>
                    <p>Equipo: ${driver.team}</p>
                    <p>Nacionalidad: ${driver.nationality}</p>
                `;
                driversContainer.appendChild(driverCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});