# pip install requests, json
import requests

# Configuración del servidor REST
IP = 'localhost'
PORT = '3000'

# Función para generar la URL de solicitud
def generar_url(operacion, *parametros):
    return f"http://{IP}:{PORT}/{operacion}/{'/'.join(map(str, parametros))}"

# Definir la función para hacer solicitudes GET al servidor
def request(operacion, *parametros):
    url = generar_url(operacion, *parametros)
    try:
        response = requests.get(url)
        data = response.json()
        print(data)
    except Exception as error:
        print('Ha ocurrido un error: ', error)

# Realizar las solicitudes GET
request('sumar', 3, 5)
request('restar', 10, 5)
request('multiplicar', 4, 6)
request('dividir', 10, 2)
