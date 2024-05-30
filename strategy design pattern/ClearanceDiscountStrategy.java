// Implements a discount strategy that applies a large discount during clearance.
class ClearanceDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double saleTotal) {
        return saleTotal * 0.5;  // Applies a 50% discount.
    }
}