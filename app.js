weather = new Weather('Folkestone');
ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    getWeather();
    $('#locModal').modal('hide');
    document.querySelector('input').value = '';
})  

// Get and display Weather
function getWeather(){
weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}




