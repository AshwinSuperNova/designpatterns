// Subject interface defining methods for attaching, detaching, and notifying observers.
interface Subject {
    void registerObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}