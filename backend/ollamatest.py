import ollama
ollama.pull("gemma")
response = ollama.chat(model='gemma', messages=[
  {
    'role': 'user',
    'content': 'Why is the sky blue?',
  },
])
print(response['message']['content'])