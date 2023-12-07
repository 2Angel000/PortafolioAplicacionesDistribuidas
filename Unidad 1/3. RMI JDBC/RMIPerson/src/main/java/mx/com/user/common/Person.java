package mx.com.user.common;

import java.io.Serializable;

public class Person implements Serializable {

    // Variables
    private static final long serialVersionUID = 123456789L;

    // Attributes
    private int id;
    private String name;
    private int age;
    private char gender;

    // Constructors
    public Person() {}

    public Person(String name, int age, char gender) {
        this.id = -1;
        this.name = name;
        this.age= age;
        this.gender = gender;
    }

    public Person(int id, String name, int age, char gender) {
        this.id = id;
        this.name = name;
        this.age= age;
        this.gender = gender;
    }

    // Methods

    @Override
    public String toString() {
        return "\nPerson {" +
                "\n\tName='" + name + '\'' +
                "\n\tAge=" + age +
                "\n\tGender=" + gender + "\n"+
                '}';
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
