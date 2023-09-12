function  climaTempo(){

    const climaInput = document.getElementById('climaInput').value;

    resultado.innerHTML = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${climaInput}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            if (data.erro) {
                resultado.innerHTML = '<p>Cidade não encontrada</p>';
            } else {
                resultado.innerHTML = `
                
                <h3>Clima: ${data.weather[0].main}</h3>
                <h3>Temperatura Mínima:  ${data.main.temp_min}° </h3>
                <h3>Temperatura Manima:  ${data.main.temp_max}° </h3>
                <h3>Umidade:  ${data.main.humidity}% </h3>
                <h3>Vento:  ${data.wind.speed}km/h </h3>

                `;
            }
        })
}

function cidade(){
    
    const cidade = document.getElementById('climaInput').value;
    
    resultado.innerHTML = '';
      
    window.open(`https://earth.google.com/web/search/${buscaCidade} `, '_blank');

        }