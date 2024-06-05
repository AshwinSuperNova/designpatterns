import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class Department {

    public void addDepartment(String deptName, String location) {
        String sql = "INSERT INTO departments (name, location) VALUES (?, ?)";
        try (Connection conn = DatabaseConnection.getInstance().getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, deptName);
            pstmt.setString(2, location);
            int affectedRows = pstmt.executeUpdate();
            System.out.println(affectedRows > 0 ? "Department added successfully." : "Department addition failed.");
        } catch (SQLException e) {
            System.out.println("Error adding department: " + e.getMessage());
        }
    }

    public void updateDepartmentLocation(String deptName, String newLocation) {
        String sql = "UPDATE departments SET location = ? WHERE name = ?";
        try (Connection conn = DatabaseConnection.getInstance().getConnection(); 
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, newLocation);
            pstmt.setString(2, deptName);
            int affectedRows = pstmt.executeUpdate();
            System.out.println(affectedRows > 0 ? "Department location updated successfully." : "Department location update failed.");
        } catch (SQLException e) {
            System.out.println("Error updating department location: " + e.getMessage());
        }
    }

    public void fetchAllDepartments() {
        String sql = "SELECT name, location FROM departments";
        try (Connection conn = DatabaseConnection.getInstance().getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                String name = rs.getString("name");
                String location = rs.getString("location");
                System.out.println("Department Name: " + name + ", Location: " + location);
            }
        } catch (SQLException e) {
            System.out.println("Error fetching departments: " + e.getMessage());
        }
    }

    public void deleteDepartment(String deptName) {
        String sql = "DELETE FROM departments WHERE name = ?";
        try (Connection conn = DatabaseConnection.getInstance().getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, deptName);
            int affectedRows = pstmt.executeUpdate();
            System.out.println(affectedRows > 0 ? "Department deleted successfully." : "Department deletion failed.");
        } catch (SQLException e) {
            System.out.println("Error deleting department: " + e.getMessage());
        }
    }
    public void disconnect() {
        DatabaseConnection.getInstance().disconnect();
    }
}
