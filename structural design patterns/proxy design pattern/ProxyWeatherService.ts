import { WeatherForecast } from "./WeatherForecast";
import { WeatherService } from "./WeatherService";

/**
 * The ProxyWeatherService implements the same interface as the real service. However,
 * the proxy uses an internal cache to store responses. Subsequent calls to the
 * proxied service will go faster as they won't call the real slow service. The
 * proxy also logs useful information about the cache usage and timings.
 */
export class ProxyWeatherService implements WeatherService {
    private cachedForecast?: WeatherForecast;
    private cacheDate?: Date;
    private readonly cacheDuration = 24 * 60 * 60 * 1000; // 24 hours

    constructor(private realWeatherService: WeatherService) { }

    public async getForecast(): Promise<WeatherForecast> {
        console.log(`Requesting forecast on ${new Date().toISOString()}.`);
        const startTime = Date.now();

        if (this.isCacheExpired()) {
            console.log('Cache expired. Fetching new forecast...');
            this.updateCache(await this.realWeatherService.getForecast());
        }

        const elapsedTime = Date.now() - startTime;
        console.log(`Request processed in ${elapsedTime} milliseconds`);
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
