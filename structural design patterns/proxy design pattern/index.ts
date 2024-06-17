import { ProxyWeatherService } from "./ProxyWeatherService";
import { RealWeatherService } from "./RealWeatherService";
import { WeatherService } from "./WeatherService";

async function clientCode(weatherService: WeatherService) {
    for (let i = 0; i < 3; i++) {
        const forecast = await weatherService.getForecast();
        console.log(`Weather forecast: ${forecast.avgTemperature.toFixed(2)}ºC average temperature, ${forecast.maxPrecipitationProbability.toFixed(2)}% max precipitation probability.`);
    }
}

async function main() {
    const realService = new RealWeatherService();
    const proxyService = new ProxyWeatherService(realService);

    console.log('Client: Using real weather service:');
    await clientCode(realService);

    console.log('');

    console.log('Client: Using proxy weather service:');
    await clientCode(proxyService);
}

main();
