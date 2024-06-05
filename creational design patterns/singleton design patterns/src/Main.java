import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        User user = new User();
        Department department = new Department();
        boolean flag = true;
        while (flag) {
            System.out.println("Choose an option:");
            System.out.println("1. Add User");
            System.out.println("2. Update User Email");
            System.out.println("3. Delete User");
            System.out.println("4. Fetch All Users");
            System.out.println("5. Add Department");
            System.out.println("6. Update Department Location");
            System.out.println("7. Fetch All Departments");
            System.out.println("8. Delete Department");
            System.out.println("9. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); 
            switch (choice) {
                case 1 -> {
                    System.out.print("Enter username: ");
                    String username = scanner.nextLine();
                    System.out.print("Enter email: ");
                    String email = scanner.nextLine();
                    user.addUser(username, email);
                }
                case 2 -> {
                    System.out.print("Enter username to update: ");
                    String username = scanner.nextLine();
                    System.out.print("Enter new email: ");
                    String email = scanner.nextLine();
                    user.updateUserEmail(username, email);
                }
                case 3 -> {
                    System.out.print("Enter username to delete: ");
                    String username = scanner.nextLine();
                    user.deleteUser(username);
                }
                case 4 -> {
                    user.fetchAllUsers();
                }
                case 5 -> {
                    System.out.print("Enter department name: ");
                    String deptName = scanner.nextLine();
                    System.out.print("Enter location: ");
                    String location = scanner.nextLine();
                    department.addDepartment(deptName, location);
                }
                case 6 -> {
                    System.out.print("Enter department name to update location: ");
                    String deptName = scanner.nextLine();
                    System.out.print("Enter new location: ");
                    String location = scanner.nextLine();
                    department.updateDepartmentLocation(deptName, location);
                }
                case 7 -> {
                    department.fetchAllDepartments();
                }
                case 8 -> {
                    System.out.print("Enter department name to delete: ");
                    String deptName = scanner.nextLine();
                    department.deleteDepartment(deptName);
                }
                case 9 -> {
                    System.out.println("Exiting...");
                    department.disconnect(); 
                    flag=false; 
                    scanner.close();
                }
                default -> System.out.println("Invalid choice. Please enter a number between 1 and 9.");
            }
        }
    }
}
