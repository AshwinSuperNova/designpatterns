
class AlertSystem implements Observer {
    @Override
    public void update(float temperature, float humidity, float pressure) {
        if (temperature > 100 || humidity > 70) {
            alert();
        }
    }
    private void alert() {
        System.out.println("Alert: Extreme weather conditions!");
    }
}