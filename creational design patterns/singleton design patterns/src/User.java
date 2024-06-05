import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class User {   
    public void addUser(String username, String email) {
        String sql = "INSERT INTO users (username, email) VALUES (?, ?)";
        try { 
            Connection conn = DatabaseConnection.getInstance().getConnection();
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, username);
            pstmt.setString(2, email);
            int affectedRows = pstmt.executeUpdate();
            System.out.println(affectedRows > 0 ? "User added successfully." : "User addition failed.");
        } catch (SQLException e) {
            System.out.println("Error adding user: " + e.getMessage());
        }
    }
    public void updateUserEmail(String username, String newEmail) {
        String sql = "UPDATE users SET email = ? WHERE username = ?";
        try {
            Connection conn = DatabaseConnection.getInstance().getConnection();
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, newEmail);
            pstmt.setString(2, username);
            int affectedRows = pstmt.executeUpdate();
            System.out.println(affectedRows > 0 ? "User email updated successfully." : "User email update failed.");
        } catch (SQLException e) {
            System.out.println("Error updating user email: " + e.getMessage());
        }
    }
    public void deleteUser(String username) {
        String sql = "DELETE FROM users WHERE username = ?";
        try (Connection conn = DatabaseConnection.getInstance().getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, username);
            int affectedRows = pstmt.executeUpdate();
            System.out.println(affectedRows > 0 ? "User deleted successfully." : "User deletion failed.");
        } catch (SQLException e) {
            System.out.println("Error deleting user: " + e.getMessage());
        }
    }
    public void fetchAllUsers() {
        String sql = "SELECT username, email FROM users";
        try (Connection conn = DatabaseConnection.getInstance().getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                String username = rs.getString("username");
                String email = rs.getString("email");
                System.out.println("Username: " + username + ", Email: " + email);
            }
        } catch (SQLException e) {
            System.out.println("Error fetching users: " + e.getMessage());
        }
    }
}
