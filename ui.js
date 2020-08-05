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
        //tennis section
        this.conditions = document.getElementById('conditions');
        this.tenisContainer = document.getElementById('tennis');
    }

    paint(weather) {
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.temp.textContent = `${weather.current.temp_c} C`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.feelstemp.textContent = `Feels Like : ${weather.current.feelslike_c} C`;
        this.humidity.textContent = `Relative Humidity : ${weather.current.humidity}`;
        this.cloudCover.textContent = `Cloud Cover Percentage : ${weather.current.cloud}`;
        this.percip_mm.textContent = `Precipitation mm : ${weather.current.precip_mm}`;
        this.wind.textContent = `Wind Speed : ${weather.current.wind_kph} km/h`;
        this.gust.textContent = `Gust Speed : ${weather.current.gust_kph} km/h`;
        this.uv.textContent = `UV (0-11) : ${weather.current.uv}`;
        this.vis.textContent = `Visability : ${weather.current.vis_km} km`;
        this.pressure.textContent = `Pressure : ${weather.current.pressure_mb} mb`;

        //paint tennis section
        
            if(weather.current.wind_kph <= 15 && weather.current.gust_kph <= 15 && weather.current.precip_mm <= 0 ) {
                document.getElementById('conditions').textContent = 'Its BEST time to play Tennis!';
                document.getElementById('tennis').classList.add('excellent');
            } else if 

                (weather.current.wind_kph <= 32 && weather.current.gust_kph <= 30) {
                    
                    document.getElementById('conditions').textContent = 'Its good time to play Tennis!';
                    document.getElementById('tennis').classList.add('good');  
                     if(weather.current.precip_mm > 0.5 && weather.current.precip_mm < 2 ) {
                         document.getElementById('conditions').textContent = ' possible precipitation';
                     } else if(weather.current.precip_mm > 2) {
                        document.getElementById('conditions').textContent = 'But rain can make it hard :(';
                    } 
                    
                }else if 

                (weather.current.wind_kph <= 40 && weather.current.gust_kph <= 40) {
                    document.getElementById('conditions').textContent = 'Wind may interfere with the game';
                    document.getElementById('tennis').classList.add('moderate'); 
                    if(weather.current.precip_mm > 0.5 && weather.current.precip_mm < 2 ) {
                        document.getElementById('conditions').textContent = ' possible precipitation';
                    } else if(weather.current.precip_mm > 2) {
                       document.getElementById('conditions').textContent = 'and rain can make it harder :(';
                   } 
                     
                }else if 

                (weather.current.wind_kph <= 50 && weather.current.gust_kph <= 50  || weather.current.precip_mm > 2 ) {
                    document.getElementById('conditions').textContent = 'recommend not to play Tennis now';
                    document.getElementById('tennis').classList.add('poor');   
                }else
                 {
                    document.getElementById('conditions').textContent = 'DEFENETLY DONT Tennis now!';
                    document.getElementById('tennis').classList.add('extreme');   
                }

                
      }
    }
