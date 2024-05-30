
import java.util.ArrayList;
import java.util.List;
class WeatherStation implements Subject {
    private float temperature;
    private float humidity;
    private float pressure;
    private final List<Observer> observers;  

    public WeatherStation() {
        observers = new ArrayList<>();  // Initialize the list of observers.
    }

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(temperature, humidity, pressure);
        }
    }

    public void measurementsChanged() {
        notifyObservers();
    }
    public void listObservers() {
        System.out.println("Current observers:");
        for (Observer observer : observers) {
            System.out.println(observer.getClass().getSimpleName()); // Print the class name of the observer
        }
    }

    public void setMeasurements(float temperature, float humidity, float pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        measurementsChanged();
    }
}