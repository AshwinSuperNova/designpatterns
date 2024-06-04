class PayPalPayment implements Payment {
    private final double transactionFeePercent = 0.03;  // 3% transaction fee

    @Override
    public void processPayment(double amount) {
        double totalAmount = amount + (amount * transactionFeePercent);
        System.out.println("Processing PayPal payment of $" + totalAmount);
    }
}