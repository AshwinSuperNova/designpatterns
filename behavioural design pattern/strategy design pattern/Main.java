/*
 * Imagine you're running a store with a point-of-sale system that needs to apply different discount strategies
 *  based on promotions, customer loyalty, or clearance sales.
 *  Your system should flexibly adapt to different discount scenarios without changing its core operational code 
 * every time the discount logic changes.
 *  This is where the Strategy Pattern becomes valuable.
 */

import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double totalDue = 0.0; 
        boolean flag=true; 

        while (flag) {
            System.out.println("Available products and prices:");
            System.out.println("1. Product A - $100.0");
            System.out.println("2. Product B - $200.0");
            System.out.println("3. Product C - $300.0");
            System.out.println("4. Quit");
            System.out.print("Choose a product (1-3) or 4 to finish: ");
            int productChoice = scanner.nextInt();
            if (productChoice == 4) {
                break;  
            }
            double[] prices = {100.0, 200.0, 300.0};

            if (productChoice < 1 || productChoice > 3) {
                System.out.println("Invalid product selection. Please try again.");
                continue; 
            }
            double saleTotal = prices[productChoice - 1];  
            System.out.println("Select a discount method:");
            System.out.println("1. No Discount");
            System.out.println("2. Seasonal Discount (10%)");
            System.out.println("3. Clearance Discount (50%)");
            System.out.println("4. Loyalty Discount (15%)");
            System.out.print("Choose a discount method (1-4): ");
            int discountType = scanner.nextInt();

            CheckoutCounter counter = new CheckoutCounter();
            switch (discountType) {
                case 1 -> counter.ApplyBillingStrategy(new NoDiscountStrategy());
                case 2 -> counter.ApplyBillingStrategy(new SeasonalDiscountStrategy());
                case 3 -> counter.ApplyBillingStrategy(new ClearanceDiscountStrategy());
                case 4 -> counter.ApplyBillingStrategy(new LoyaltyDiscountStrategy());
                default -> {
                    System.out.println("Invalid discount method selected. Applying no discount.");
                    counter.ApplyBillingStrategy(new NoDiscountStrategy());
                }
            }
            double dueAmount = counter.processSale(saleTotal);
            totalDue += dueAmount;
            System.out.println("Total for this transaction: $" + dueAmount);
        }

        System.out.println("Total due for all transactions: $" + totalDue);
        scanner.close();
    }
}
