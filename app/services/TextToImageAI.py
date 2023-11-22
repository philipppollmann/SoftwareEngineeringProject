import openai
from openai import OpenAI
import os
import requests

def download_image_from_url(url, filename):
    try:
        response = requests.get(url)
        response.raise_for_status()

        save_path = os.path.join("app", "static", "img", filename)

        with open(save_path, "wb") as file:
            file.write(response.content)

        print(f"Bild erfolgreich heruntergeladen und gespeichert unter: {save_path}")

    except requests.exceptions.RequestException as e:
        print(f"Fehler beim Herunterladen des Bildes: {e}")


def generate_image_by_text(user_prompt: str):
    client = OpenAI(
        api_key=''
    )

    response = client.images.generate(
        model="dall-e-3",
        prompt=user_prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )

    return response.data[0].url


