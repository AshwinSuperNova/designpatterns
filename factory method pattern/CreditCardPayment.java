// Step 2: Concrete Products
class CreditCardPayment implements Payment {
    private final double transactionFeePercent = 0.02;  // 2% transaction fee

    @Override
    public void processPayment(double amount) {
        double totalAmount = amount + (amount * transactionFeePercent);
        System.out.println("Processing credit card payment of $" + totalAmount);
    }
}