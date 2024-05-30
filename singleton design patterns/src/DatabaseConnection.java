import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class DatabaseConnection {
    private static DatabaseConnection instance;
    private Connection connection;
    private static final String URL = "jdbc:mysql://127.0.0.1:3306/educatio_educat";
    private static final String USER = "ashwin";
    private static final String PASSWORD = "Ashwin0953@";

    private DatabaseConnection() {
    }
    private void connect() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            instance.connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println("Resource intensive operation of creating database connection done successfully.");
        } catch (SQLException | ClassNotFoundException e) {
            System.out.println("Error connecting to the database: " + e.getMessage());
        }
    }
    public static synchronized DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
            instance.connect();
            System.out.println("Databaseconnection object.");
        }
        return instance;
    }
    public Connection getConnection() {
        try {
            if (instance.connection == null || instance.connection.isClosed()) {
                instance.connect(); 
            }
        } catch (SQLException e) {
            System.out.println("Error checking if connection is closed: " + e.getMessage());
        }
        return instance.connection;
    }

    public void disconnect() {
        if (instance.connection != null) {
            try {
                instance.connection.close();
                System.out.println("Database connection closed.");
            } catch (SQLException e) {
                System.out.println("Error closing the database: " + e.getMessage());
            }
        }
    }
}
