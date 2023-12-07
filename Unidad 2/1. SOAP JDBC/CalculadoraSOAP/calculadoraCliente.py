import tkinter as tk
from zeep import Client

# crearemos el cliente

IP = "192.168.231.1"
PORT = "8080"
icono = "img/calculadora.ico"

url = "http://192.168.231.1:8080/calculator?wsdl"
url2 = 'http://localhost:8000/calculator?wsdl'

cliente = Client(url)

ventana = tk.Tk()
ventana.title(f"SOAP - IP:{IP} Port:{PORT}")
# Obtener el ancho y el alto de la pantalla
ancho_pantalla = ventana.winfo_screenwidth()
alto_pantalla = ventana.winfo_screenheight()

# Calcular las coordenadas x e y para centrar la ventana
x = (ancho_pantalla - ventana.winfo_reqwidth()) // 2
y = (alto_pantalla - ventana.winfo_reqheight()) // 2

# Establecer la geometría de la ventana
ventana.geometry(f"+{x}+{y}")
ventana.iconbitmap(icono)
ventana.resizable(False, False)
ventana.configure(bg="lightblue")

# para que se pongan nuevos valores a la izquierda
i = 0

# TextField
entradatxt = tk.Entry(ventana, font="Roboto 20")
entradatxt.grid(row=0, column=0, columnspan=4, padx=10, pady=5)


# Funciones

def click_boton(valor):
    global i
    entradatxt.insert(i, valor)
    i += 1


def click_borrar():
    entradatxt.delete(0, tk.END)
    i = 0

def hacer_operacion():
    cadena = entradatxt.get()
    if "+" in cadena:
        numeros = cadena.split("+")
        if len(numeros) == 2:
            a = float(numeros[0])
            b = float(numeros[1])
            resultado_suma = cliente.service.add(a, b)
            print(f"La suma de {a} y {b} es: {resultado_suma}")
            entradatxt.delete(0, tk.END)
            entradatxt.insert(0, resultado_suma)
            i = 0
    elif "-" in cadena:
        numeros = cadena.split("-")
        if len(numeros) == 2:
            a = float(numeros[0])
            b = float(numeros[1])
            resultado_resta = cliente.service.subtract(a, b)
            print(f"La resta de {a} y {b} es: {resultado_resta}")
            entradatxt.delete(0, tk.END)
            entradatxt.insert(0, resultado_resta)
            i = 0
    elif "*" in cadena:
        numeros = cadena.split("*")
        if len(numeros) == 2:
            a = float(numeros[0])
            b = float(numeros[1])
            resultado_multiplicacion = cliente.service.multiplicacion(a, b)
            print(f"La multiplicacion de {a} y {b} es: {resultado_multiplicacion}")
            entradatxt.delete(0, tk.END)
            entradatxt.insert(0, resultado_multiplicacion)
            i = 0
    elif "/" in cadena:
        numeros = cadena.split("/")
        if len(numeros) == 2:
            a = float(numeros[0])
            b = float(numeros[1])
            resultado_division = cliente.service.div(a, b)
            print(f"La division de {a} y {b} es: {resultado_division}")
            entradatxt.delete(0, tk.END)
            entradatxt.insert(0, resultado_division)
            i = 0


# botones

# Números
boton1 = tk.Button(ventana, text="1", width=5, height=2, command=lambda: click_boton(1))
boton2 = tk.Button(ventana, text="2", width=5, height=2, command=lambda: click_boton(2))
boton3 = tk.Button(ventana, text="3", width=5, height=2, command=lambda: click_boton(3))
boton4 = tk.Button(ventana, text="4", width=5, height=2, command=lambda: click_boton(4))
boton5 = tk.Button(ventana, text="5", width=5, height=2, command=lambda: click_boton(5))
boton6 = tk.Button(ventana, text="6", width=5, height=2, command=lambda: click_boton(6))
boton7 = tk.Button(ventana, text="7", width=5, height=2, command=lambda: click_boton(7))
boton8 = tk.Button(ventana, text="8", width=5, height=2, command=lambda: click_boton(8))
boton9 = tk.Button(ventana, text="9", width=5, height=2, command=lambda: click_boton(9))
boton0 = tk.Button(ventana, text="0", width=17, height=2, command=lambda: click_boton(0))

# extras
boton_borrar = tk.Button(ventana, text="AC", width=28, height=2, command=lambda: click_borrar())
boton_punto = tk.Button(ventana, text=".", width=5, height=2, command=lambda: click_boton("."))

# operaciones
boton_suma = tk.Button(ventana, text="+", width=5, height=2, command=lambda: click_boton("+"))
boton_resta = tk.Button(ventana, text="-", width=5, height=2, command=lambda: click_boton("-"))
boton_multiplicar = tk.Button(ventana, text="*", width=5, height=2, command=lambda: click_boton("*"))
boton_dividir = tk.Button(ventana, text="/", width=5, height=2, command=lambda: click_boton("/"))
boton_igual = tk.Button(ventana, text="=", width=5, height=2, command=hacer_operacion)

# posicionando botones en pantalla
boton_borrar.grid(row=1, column=0, columnspan=3, padx=5, pady=5)
boton_dividir.grid(row=1, column=3, padx=5, pady=5)

boton7.grid(row=2, column=0, padx=5, pady=5)
boton8.grid(row=2, column=1, padx=5, pady=5)
boton9.grid(row=2, column=2, padx=5, pady=5)
boton_multiplicar.grid(row=2, column=3, padx=5, pady=5)

boton4.grid(row=3, column=0, padx=5, pady=5)
boton5.grid(row=3, column=1, padx=5, pady=5)
boton6.grid(row=3, column=2, padx=5, pady=5)
boton_resta.grid(row=3, column=3, padx=5, pady=5)

boton1.grid(row=4, column=0, padx=5, pady=5)
boton2.grid(row=4, column=1, padx=5, pady=5)
boton3.grid(row=4, column=2, padx=5, pady=5)
boton_suma.grid(row=4, column=3, padx=5, pady=5)

boton0.grid(row=5, column=0, columnspan=2, padx=5, pady=5)
boton_punto.grid(row=5, column=2, padx=5, pady=5)
boton_igual.grid(row=5, column=3, padx=5, pady=5)

ventana.mainloop()
