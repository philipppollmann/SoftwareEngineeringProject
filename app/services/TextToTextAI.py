import os
from openai import OpenAI

def generate_text_to_text():
  client = OpenAI(
    api_key=''
  )

  completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system",
       "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
      {"role": "user", "content": "Compose a poem that explains the concept of recursion in programming."}
    ]
  )

  return(completion.choices[0].message)
