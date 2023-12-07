import java.rmi.Naming;

public class ClienteOperaciones {
    public static void main(String[] args) {
        try {
            OperacionesMatematicas obj = (OperacionesMatematicas) Naming.lookup("//localhost/OperacionesMatematicas");

            double a = 10;
            double b = 5;

            System.out.println("Suma: " + obj.suma(a, b));
            System.out.println("Resta: " + obj.resta(a, b));
            System.out.println("Multiplicación: " + obj.multiplicacion(a, b));
            System.out.println("División: " + obj.division(a, b));
        } catch (Exception e) {
            System.err.println("Error en el cliente: " + e.getMessage());
        }
    }
}
