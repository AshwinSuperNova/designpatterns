// Handles user input to set measurements dynamically in the WeatherStation.

import java.util.Scanner;

class UserInputHandler {
    private Scanner scanner;
    private WeatherStation weatherStation;

    // Constructor to bind a WeatherStation object for updates.
    public UserInputHandler(WeatherStation weatherStation) {
        this.weatherStation = weatherStation;
        this.scanner = new Scanner(System.in);
    }
    public void start() {
        while (true) {
            System.out.println("Enter temperature, humidity, and pressure (or 'exit' to quit):");
            String input = scanner.nextLine();
            if ("exit".equalsIgnoreCase(input)) {
                break;
            }

            String[] parts = input.split(",");
            float temperature = Float.parseFloat(parts[0].trim());
            float humidity = Float.parseFloat(parts[1].trim());
            float pressure = Float.parseFloat(parts[2].trim());
            weatherStation.setMeasurements(temperature, humidity, pressure);
        }
        scanner.close();
    }
}