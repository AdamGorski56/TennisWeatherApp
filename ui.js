class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.feelstemp = document.getElementById('w-feelstemp');
        this.humidity = document.getElementById('w-humidity');
        this.cloudCover = document.getElementById('w-cloudCover');
        this.percip_in = document.getElementById('w-percip_in');
        this.percip_mm = document.getElementById('w-percip_mm');
        this.wind = document.getElementById('w-wind');
        this.gust = document.getElementById('w-gust');
        this.uv = document.getElementById('w-uv');
        this.vis = document.getElementById('w-vis');
        this.pressure = document.getElementById('w-pressure');
    }

    paint(weather) {
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.temp.textContent = `${weather.current.temp_c} C`;
        this.icon.getAttribute('src', weather.current.condition.icon);
        this.feelstemp.textContent = `Feels Like : ${weather.current.feelslike_c} C`;
        this.humidity.textContent = `Relative Humidity : ${weather.current.humidity}`;
        this.cloudCover.textContent = `Cloud Cover Percentage : ${weather.current.cloud}`;
        this.percip_mm.textContent = `Precipitation mm : ${weather.current.precip_mm}`;
        this.wind.textContent = `Wind Speed : ${weather.current.wind_kph} km/h`;
        this.gust.textContent = `Gust Speed : ${weather.current.gust_kph} km/h`;
        this.uv.textContent = `UV (0-11) : ${weather.current.uv}`;
        this.vis.textContent = `Visability : ${weather.current.vis_km} km`;
        this.pressure.textContent = `Pressure : ${weather.current.pressure_mb} mb`;
    
    }
}