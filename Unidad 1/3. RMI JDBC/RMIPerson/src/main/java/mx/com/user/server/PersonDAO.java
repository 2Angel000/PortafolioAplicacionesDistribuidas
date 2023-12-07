package mx.com.user.server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import mx.com.user.common.Person;

public class PersonDAO {
    //Variables
    private static final String TABLE = "person";
    private static final String SQL_SELECT = "SELECT * FROM " + TABLE + ";";
    private static final String SQL_INSERT = "INSERT INTO " + TABLE + " (name, age, gender)"
            + " VALUES (?, ?, ?);";
    private static final String SQL_UPDATE = "";
    private static final String SQL_DELETE = "";

    // Attributes
    private Connection connection;

    // Constructors
    public PersonDAO() {
        try {
            this.connection = MySQLConnection.getConnection();
        } catch (SQLException sqlException) {
            System.err.println(sqlException.getMessage());
        }
    }

    // Methods
    public List<Person> getPeople() {
        List<Person> people = new ArrayList<>();
        try {
            PreparedStatement statement = this.connection.prepareStatement(SQL_SELECT);
            ResultSet resultSet = statement.executeQuery();
            while(resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                int age = resultSet.getInt("age");
                char gender = resultSet.getString("gender").charAt(0);

                Person person = new Person(id, name, age, gender);
                people.add(person);
            }
        } catch (SQLException sqlException) {
            System.err.println(sqlException.getMessage());
        }
        return people;
    }

    public boolean insertPerson(Person person) {
        try {
            PreparedStatement statement = connection.prepareStatement(SQL_INSERT);
            statement.setString(1, person.getName());
            statement.setInt(2, person.getAge());
            statement.setString(3, "" + person.getGender());

            int rowsAffected = statement.executeUpdate();
            if(rowsAffected > 0) {
                System.out.println("Insert Succeed");
                return true;
            } else {
                System.out.println("Insert Wrong!");
                return false;
            }
        } catch (SQLException sqlException) {
            System.err.println(sqlException.getMessage());
            return false;
        }
    }


    // Getters and setters

}
