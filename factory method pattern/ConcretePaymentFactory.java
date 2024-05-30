class ConcretePaymentFactory extends PaymentFactory {
    // Factory method implementation
    @Override
    Payment getPaymentMethod(String type) {
        switch (type) {
            case "CreditCard" -> {
                return new CreditCardPayment();
            }
            case "PayPal" -> {
                return new PayPalPayment();
            }
            case "BankTransfer" -> {
                return new BankTransferPayment();
            }
            default -> throw new IllegalArgumentException("Payment method not supported: " + type);
        }
    }
}