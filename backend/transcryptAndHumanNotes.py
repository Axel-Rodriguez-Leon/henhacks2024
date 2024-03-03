import ollama
ollama.pull("gemma")
#file = open("forloopsTranscript.txt")
with open('./lecture_transcripts/pokemonTypeMatchupsLecture.txt', 'r') as file:
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
'''response = ollama.chat(model='gemma', messages=[
  {
    'role': 'user',
    'content': 'Why',
  },
])
print(response['message']['content'])
'''