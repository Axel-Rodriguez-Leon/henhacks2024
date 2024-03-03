# henhacks2024
Axel Rodriguez-Leon, Juan Saquino

## Problem(s): 
The UD DSS Student Notetaker has a flaw in that notes are only available as there are many willing volunteers. Some courses may not get any volunteers, so some students may need them. 
## Solution(s):
An AI system can be used to automatically create notes and highlights for DSS students when there is a lack of notetakers.


## Implementation:

### Backend:
Using Google Gemma & Ollama:
-  It takes in the transcrypt of the lecture and the user's notes to generate a new set of notes

### Frontend:


### Training phase:
First, we start with only small changes from the current note-taker method.

- A note-taker is requested
- A note-taker will take notes
- Notes will be uploaded to a system that AI will have access to
- AI will analyze the video, transcript, and user notes to create supplementary notes for the student who needs it (This can include more detailed documentation, key moments, etc)
- Repeat

### Semi-automation:
- AI will not require notes from a volunteer, but will still accept them
- I will create notes based on its data, and feedback that it receives it (This can include more detailed documentation, key moments, etc)


### Notes:
This will be done through the DSS system to avoid abusers
This can reduce costs through the current system that the university uses
Can help both the note-taker and the person who needs it


# Setup:

This uses project uses Ollama, and Gemma
- Install Olama from https://ollama.com/download
- Run the setup
- In the terminal run \n `ollama run gemma:2b` to download it
- TBD