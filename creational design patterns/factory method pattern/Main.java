/*
 * Scenario: In a payment processing system, you might need to support multiple types of payment methods.
 *  Each payment method processes the payment differently and might have different transaction fees associated with it. 
 * The exact payment method to be used can vary for each customer or transaction, depending on the user's choice or other business rules.
 */



// Step 1: Product Interface

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        PaymentFactory paymentFactory = new ConcretePaymentFactory();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Select a payment method:");
        System.out.println("1. CreditCard");
        System.out.println("2. PayPal");
        System.out.println("3. BankTransfer");
        System.out.print("Enter your choice (1-3): ");
        int choice = scanner.nextInt();  // Read integer input for switch case
        
        scanner.nextLine();  // Consume the newline left after reading the integer

        System.out.println("Enter payment amount:");
        double amount = scanner.nextDouble();  // Read the amount to be paid

        String paymentType = "";
        switch (choice) {
            case 1 -> paymentType = "CreditCard";
            case 2 -> paymentType = "PayPal";
            case 3 -> paymentType = "BankTransfer";
            default -> {
                System.out.println("Invalid choice. Please enter a valid option (1, 2, or 3).");
                scanner.close();
                return;  // Exit if the choice is invalid
            }
        }

        try {
            Payment payment = paymentFactory.getPaymentMethod(paymentType);
            payment.processPayment(amount);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
        // Close the scanner object to free resources

        scanner.close();  // Close the scanner object to free resources
    }
}
/*
  Step 1: Product Interface
interface Document {
    void open();
    void save();
    void close();
}

// Step 2: Concrete Products
class WordDocument implements Document {
    public void open() {
        System.out.println("Open a Word document.");
    }
    public void save() {
        System.out.println("Save the Word document.");
    }
    public void close() {
        System.out.println("Close the Word document.");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("Open a PDF document.");
    }
    public void save() {
        System.out.println("Save the PDF document.");
    }
    public void close() {
        System.out.println("Close the PDF document.");
    }
}

class TextDocument implements Document {
    public void open() {
        System.out.println("Open a Text file.");
    }
    public void save() {
        System.out.println("Save the Text file.");
    }
    public void close() {
        System.out.println("Close the Text file.");
    }
}

// Step 3: Abstract Creator
abstract class DocumentCreator {
    // Factory method declaration
    public abstract Document createDocument(String type);
}

// Step 4: Concrete Creator
class ConcreteDocumentCreator extends DocumentCreator {
    public Document createDocument(String type) {
        switch (type) {
            case "Word":
                return new WordDocument();
            case "PDF":
                return new PdfDocument();
            case "Text":
                return new TextDocument();
            default:
                throw new IllegalArgumentException("Unknown document type: " + type);
        }
    }
}

// Client code
public class DocumentManager {
    public static void main(String[] args) {
        DocumentCreator creator = new ConcreteDocumentCreator();
        Document doc = creator.createDocument("Word");
        doc.open();
        doc.save();
        doc.close();
    }
}

 */