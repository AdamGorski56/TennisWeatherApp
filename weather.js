class Weather{
    constructor(city){
        this.apiKey = 'fd2508f279e04d0abdb123459200208';
        this.city = city;
    }

// Fetcg weather from API
   async getWeather() {
        const response = await fetch
        (`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        const responseData = await response.json();
        
        return responseData;
    }

    changeLocation(city){
    this.city = city;
    }   


}