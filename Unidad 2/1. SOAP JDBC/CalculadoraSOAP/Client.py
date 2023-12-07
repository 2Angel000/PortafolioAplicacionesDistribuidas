from zeep import Client

# URL del servicio SOAP en Java
url = "http://192.168.231.1:8080/calculator?wsdl"

# Crea un cliente SOAP
client = Client(url)

# Llama a la operación 'add' en el servidor Java
result_add = client.service.add(5, 3)
print(f"Addition result: {result_add}")

# Llama a la operación 'subtract' en el servidor Java
result_subtract = client.service.subtract(10, 4)
print(f"Subtraction result: {result_subtract}")