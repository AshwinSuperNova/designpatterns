// ProxyWeatherService.ts
import { WeatherForecast } from "./WeatherForecast";
import { WeatherService } from "./WeatherService";

export class ProxyWeatherService implements WeatherService {
    private cachedForecast?: WeatherForecast;
    private cacheDate?: Date;
    private readonly cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

    constructor(private realWeatherService: WeatherService) { }

    public async getForecast(): Promise<WeatherForecast> {
        if (this.isCacheExpired()) {
            console.log('Cache expired. Fetching new forecast...');
            this.updateCache(await this.realWeatherService.getForecast());
        } else {
            console.log('Using cached forecast.');
        }

        return this.cachedForecast!;
    }

    private isCacheExpired(): boolean {
        return !this.cachedForecast || (this.cacheDate && Date.now() > this.cacheDate.getTime() + this.cacheDuration);
    }

    private updateCache(forecast: WeatherForecast): void {
        this.cachedForecast = forecast;
        this.cacheDate = new Date();
    }
}
