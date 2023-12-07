package mx.com.user.server;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

import mx.com.user.common.PersonInterface;

public class Server {
    public static void main(String[] args) {

        final int RMI_PORT = 1098;
        final String SERVICE_NAME = "PersonService";

        try {

            //Creates an object remote instance
            PersonInterface personInterface = new PersonImplementation();

            // Creates an RMI Registry
            Registry registry = LocateRegistry.createRegistry(RMI_PORT);

            // Record the remote object in the registry with a name
            registry.rebind(SERVICE_NAME, personInterface);

            // Server Message
            System.out.println("Server Ready to receive invocations");

        } catch (Exception e) {
            System.err.println(e.getMessage());
            System.exit(0);
        }
    }
}
