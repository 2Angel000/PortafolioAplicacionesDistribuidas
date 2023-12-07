from zeep import Client

#Crearemos el cliente
#http://localhost:8000/calculator?wsdl
cliente = Client('http://localhost:8080/Calculadora/Calculadora_service?WSDL')

a = float(input("Por favor ingrese el primer valor: "))
b = float(input("Por favor ingrese el segundo valor: "))

resultado_suma = cliente.service.suma(a,b)
resultado_resta = cliente.service.resta(a,b)
resultado_multiplicacion = cliente.service.multiplicacion(a,b)
resultado_division = cliente.service.division(a,b)

print(f"La suma de {a} y {b} es: {resultado_suma}")
print(f"La resta de {a} y {b} es: {resultado_resta}")
print(f"La multiplicacion de {a} y {b} es: {resultado_multiplicacion}")
print(f"La division de {a} y {b} es: {resultado_division}")