import ollama
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