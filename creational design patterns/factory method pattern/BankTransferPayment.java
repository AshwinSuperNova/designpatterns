class BankTransferPayment implements Payment {
    private final double transactionFeePercent = 0.01;  // 1% transaction fee

    @Override
    public void processPayment(double amount) {
        double totalAmount = amount + (amount * transactionFeePercent);
        System.out.println("Processing bank transfer of $" + totalAmount);
    }
}