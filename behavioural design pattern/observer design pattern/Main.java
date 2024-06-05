/*
 *  In a weather monitoring system, various displays and systems need 
 * to show or react to the latest weather data. 
 * These might include a current conditions display, 
 * a weather forecast module, and an alert system for extreme conditions.
 */


public class Main {
    public static void main(String[] args) {
        WeatherStation weatherStation = new WeatherStation();
        CurrentConditionsDisplay currentDisplay = new CurrentConditionsDisplay();
        ForecastDisplay forecastDisplay = new ForecastDisplay();
        AlertSystem alertSystem = new AlertSystem();
        weatherStation.registerObserver(currentDisplay);
        weatherStation.registerObserver(forecastDisplay);
        weatherStation.registerObserver(alertSystem);
        weatherStation.listObservers();
        UserInputHandler inputHandler = new UserInputHandler(weatherStation);
        inputHandler.start();
    }
}

// Output:
// 70,50,29.2
// Current conditions: 70.0F degrees and 50.0% humidity
// Forecast: Watch out for cooler, rainy weather
// 80,65,30.3
// 75,45,30.2
// 90,70,29.9
// 100,75,29.8

