import requests

nuevoAlumno = {
    "control":"18520303",
    "nombre":"Andre",
    "semestre":"1ro",
}

IP = "localhost"
PORT = "3000"

#Server
url = f"http://{IP}:{PORT}/informacion"
print(f"Conectado a: {url}")

try:
    response = requests.post(url, json=nuevoAlumno)
    response.raise_for_status()

    print("Datos insertador correctamente!",response.json())
except requests.exceptions.RequestException as e:
    print(f"Error al insertar datos: {e}")


