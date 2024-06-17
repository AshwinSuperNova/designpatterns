import { WeatherForecast } from "./WeatherForecast";
import { WeatherService } from "./WeatherService";


export class RealWeatherService implements WeatherService {
    public async getForecast(): Promise<WeatherForecast> {
        const randomWeatherForecast: WeatherForecast = {
            avgTemperature: Math.random() * 35,
            maxPrecipitationProbability: Math.random() * 100,
        };

        return new Promise((resolve) => {
            setTimeout(() => resolve(randomWeatherForecast), 1000);
        });
    }
}
