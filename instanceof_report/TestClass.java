import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class TestClass {
    private static final Object JDBCTutorialUtilities = null;
    private int i;

    static {
        String [] strings = {"string"};
        for(String s : strings) {
            String newString = s;
            s = s.toUpperCase();
            s.equals(s);
        }

        for (int i =0, j; i< 10; i++) {
            j = i;
            i += 2;
            i = i - 2;
            i = j;
        }

        try {
            System.out.println("trying");
        }
        catch(Exception e) {
            System.out.println(e.toString());
            if (e instanceof NullPointerException ) {
                e.getCause();
                System.out.println(e);
            }
            else if (e instanceof IOException) {
                e.addSuppressed(e);
            }
        }
    }

    private static void useParameters(Object x, Object y) {
        if (x instanceof Integer) {
            System.out.println(x);
        }
        else if (x instanceof String && y instanceof Integer) {
            String newString = ((String) x).toLowerCase();
        }
    }

        public static void viewTable (Connection con) throws SQLException {

        String query = "select COF_NAME, SUP_ID, PRICE, SALES, TOTAL from COFFEES";

        try (Statement stmt = con.createStatement()) {
            ResultSet rs = stmt.executeQuery(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public static void main (String... args) {
        System.out.println("it works");
        ArrayList<Integer> arrL = new ArrayList<Integer>();
        arrL.forEach(n -> System.out.println(n));
        arrL.forEach(n -> { if (n%2 == 0) System.out.println(n); });
    }
}

