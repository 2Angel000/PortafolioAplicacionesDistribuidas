package mx.com.user.common;

import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.List;

public interface PersonInterface extends Remote {
    String sayHello() throws RemoteException;

    String savePerson(Person person) throws RemoteException;
    List<Person> getPeople() throws RemoteException;
}
