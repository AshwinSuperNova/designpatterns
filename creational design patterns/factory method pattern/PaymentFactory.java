// Step 3: Creator (abstract)
abstract class PaymentFactory {
    // Factory method declaration
    abstract Payment getPaymentMethod(String type);
}