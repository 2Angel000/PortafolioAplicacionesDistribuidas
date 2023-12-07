package mx.com.user.client;

import javax.swing.*;

import mx.com.user.common.Person;
import mx.com.user.common.PersonInterface;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class Client {

    public static void main(String[] args) {

        // RMI variables
        final String IP_ADDRESS = "192.168.228.25";//localhost
        final int RMI_PORT = 1098;
        final String SERVICE_NAME = "PersonService";


        // Getting the user info
        try {
            // Building a person object
            Person person = createPerson();

            // RMI Section
            // Gets a reference to the RMI registry on the remote machine
            Registry registry = LocateRegistry.getRegistry(IP_ADDRESS, RMI_PORT);
            // Getting the reference to the remote object with the name
            PersonInterface personInterface = (PersonInterface) registry.lookup(SERVICE_NAME);
            // Invoke wave method
            System.out.println(personInterface.sayHello());

            /* ----------------- Insert Area ------------- */

            System.out.println(
                    "Saving Person... " +
                    personInterface.savePerson(person)
            );


            /* ---------------- Select Area ------------- */
            System.out.println(personInterface.getPeople());

        } catch (Exception e) {
            System.err.println(e.toString());
            System.exit(0);
        }

    }


    public static Person createPerson() {
        // Person attributes
        String name;
        int age;
        char gender;

        JOptionPane.showMessageDialog(
                null,
                "RMI and Data Layer",
                "Info",
                JOptionPane.WARNING_MESSAGE
        );
        name = JOptionPane.showInputDialog(
                null,
                "Your name",
                "Add Person",
                JOptionPane.QUESTION_MESSAGE
        );
        age = Integer.parseInt(
                JOptionPane.showInputDialog(
                        null,
                        "Your age",
                        "Add Person",
                        JOptionPane.QUESTION_MESSAGE
                )
        );
        gender = JOptionPane.showInputDialog(
                null,
                "Your gender (M) (F)",
                "Add Person",
                JOptionPane.QUESTION_MESSAGE
        ).charAt(0);
        return new Person(name, age, gender);
    }



}
