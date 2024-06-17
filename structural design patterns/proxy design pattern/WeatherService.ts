import { WeatherForecast } from "./WeatherForecast";

export interface WeatherService {
    getForecast(): Promise<WeatherForecast>;
}
