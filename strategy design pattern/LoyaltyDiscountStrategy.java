// Implements a discount strategy for loyal customers.
class LoyaltyDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double saleTotal) {
        return saleTotal * 0.85;  // Applies a 15% discount.
    }
}