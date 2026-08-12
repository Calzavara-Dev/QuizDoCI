import os
import requests
import json

api_key = "YOUR_API_KEY_HERE"

url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}
data = {
    "contents": [{"parts": [{"text": "Hello, how are you?"}]}]
}

response = requests.post(url, headers=headers, json=data)
print(response.status_code)
print(response.text)
