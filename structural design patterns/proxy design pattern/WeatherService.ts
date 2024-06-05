import { WeatherForecast } from "./WeatherForecast";

/**
 * The WeatherService defines the interface and response for the weather service
 */
export interface WeatherService {
    getForecast(): Promise<WeatherForecast>;
}
