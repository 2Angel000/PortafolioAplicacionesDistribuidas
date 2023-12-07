import requests

# Clave y Endpoint
api_key = "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"
endpoint = "https://api.openai.com/v1/engines/davinci/completions"

# Definir texto de entrada
prompt = "Escribe algo sobre python"
model = "text-davinci-003"

# Cuerpo de solicitud
data = {
    "prompt": prompt,
    "max_tokens": 100
}

# Solicitud a la API
response = requests.post(endpoint, json=data, headers={
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
})

# Resultado
print(response.json())
