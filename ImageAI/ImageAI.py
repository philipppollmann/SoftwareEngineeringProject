import tensorflow
from openai import OpenAI
import requests
from io import BytesIO
from PIL import Image


def download_image(url, save_path):
    response = requests.get(url)

    if response.status_code == 200:
        image = Image.open(BytesIO(response.content))

        image.save(save_path)
        print(f"Bild wurde erfolgreich gespeichert unter: {save_path}")
    else:
        print(f"Fehler beim Herunterladen des Bildes. Statuscode: {response.status_code}")


def generate_image(prompt: str):
    client = OpenAI(
        api_key=''
    )

    response = client.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )

    image_url = response.data[0].url
    download_image(image_url, '../assets/img')
