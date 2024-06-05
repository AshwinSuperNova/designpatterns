/**
 * Real World Example for the Proxy Design Pattern
 *
 * Need: Cache and log access to an external weather service SDK
 *
 * Solution: Create a proxy class to cache the SDK calls and log the requests
 */

import { ProxyWeatherService } from "./ProxyWeatherService";
import { RealWeatherService } from "./RealWeatherService";
import { WeatherService } from "./WeatherService";

/**
 * The client code works with both real and proxied services
 */
async function clientCode(weatherService: WeatherService) {
    for (let i = 0; i < 3; i++) {
        const forecast = await weatherService.getForecast();
        console.log(`Weather forecast: ${forecast.avgTemperature.toFixed(2)}ºC average temperature, ${forecast.maxPrecipitationProbability.toFixed(2)}% max precipitation probability.`);
    }
}

async function main() {
    console.log('Client: Using real weather service:');
    const realService = new RealWeatherService();
    await clientCode(realService);

    console.log('');

    console.log('Client: Using proxy weather service:');
    const proxyService = new ProxyWeatherService(realService);
    await clientCode(proxyService);
}

main();
