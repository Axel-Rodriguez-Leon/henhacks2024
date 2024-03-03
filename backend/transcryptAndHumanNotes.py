import ollama
from ollama import chat

ollama.pull("gemma")
#file = open("forloopsTranscript.txt")
with open('./lecture_transcripts/drPepperLecturewHumanandTranscript.txt', 'r') as file:
  response = ollama.chat(
    model='gemma',
    messages=[
      {
        'role': 'user',
        'content': file.read()
      },
    ],
  )
print(response['message']['content'])

messages = [
  {
    'role': 'user',
    'content': input("What else would you like me to do?"),
  },
]

response = chat('gemma', messages=messages)
print(response['message']['content'])