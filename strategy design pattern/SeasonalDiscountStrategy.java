// Implements a discount strategy that applies a seasonal discount.

class SeasonalDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double saleTotal) {
        return saleTotal * 0.9;  // Applies a 10% discount.
    }
}