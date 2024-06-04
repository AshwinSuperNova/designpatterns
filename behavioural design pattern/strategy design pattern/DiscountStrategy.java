// Defines a common interface for all discount strategies.

interface DiscountStrategy {
    double applyDiscount(double saleTotal);
}