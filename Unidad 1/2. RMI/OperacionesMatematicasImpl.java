import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class OperacionesMatematicasImpl extends UnicastRemoteObject implements OperacionesMatematicas {

    protected OperacionesMatematicasImpl() throws RemoteException {
        super();
    }

    @Override
    public double suma(double a, double b) throws RemoteException {
        return a + b;
    }

    @Override
    public double resta(double a, double b) throws RemoteException {
        return a - b;
    }

    @Override
    public double multiplicacion(double a, double b) throws RemoteException {
        return a * b;
    }

    @Override
    public double division(double a, double b) throws RemoteException {
        if (b == 0) {
            throw new RemoteException("No se puede dividir por cero");
        }
        return a / b;
    }

    public static void main(String[] args) {
        try {
            OperacionesMatematicasImpl obj = new OperacionesMatematicasImpl();
            java.rmi.registry.LocateRegistry.createRegistry(1099);
            java.rmi.Naming.rebind("//localhost/OperacionesMatematicas", obj);
            System.out.println("Servidor listo...");
        } catch (Exception e) {
            System.err.println("Error en el servidor: " + e.getMessage());
        }
    }
}
