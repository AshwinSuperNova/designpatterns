// Implements a discount strategy where no discount is applied.

class NoDiscountStrategy implements DiscountStrategy {
    @Override
    public double applyDiscount(double saleTotal) {
        return saleTotal;  // Returns the original amount with no discount.
    }
}