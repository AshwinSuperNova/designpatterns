// The context class that uses the Strategy Pattern.
class CheckoutCounter {
    private DiscountStrategy discountStrategy;

    public void ApplyBillingStrategy(DiscountStrategy discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    // Allows dynamic change of the discount strategy.
    public void setDiscountStrategy(DiscountStrategy discountStrategy) {
        this.discountStrategy = discountStrategy;
    }

    // Processes the sale by applying the chosen discount strategy.
    public double processSale(double saleTotal) {
        return discountStrategy.applyDiscount(saleTotal);
    }
}