from zeep import Client

# SOAP service URL
PUBLISHER_IP = "192.168.231.1"
PUBLISHER_PORT = "8080"
PUBLISHER_NAME = "data"

PUBLISHER_ADDRESS = "http://" + PUBLISHER_IP + ":" + PUBLISHER_PORT + "/" + PUBLISHER_NAME

WSDL_ADDRESS = PUBLISHER_ADDRESS + "?wsdl"

# Creating the SOAP Client
client = Client(WSDL_ADDRESS)

# Calling a method from the SOAP web service
result = client.service.wave(name="Alfonso")

messages = client.service.getMessages()

for index, message in enumerate(messages):
    print("Message {")
    print("Text=" + message.text)
    print("Date=" + message.date)
    print("}")


isSuccess = client.service.insertMessage(messageText="Hola desde Python")

if isSuccess:
    print("Message sent")
else:
    print("Error sending message")
