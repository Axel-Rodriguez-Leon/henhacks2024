import YouTubeVideo from '../YouTubeVideo';
import AICSNotes from '../forLoopNotesw_Notes.png'
// transcript was copied and pasted over, running out of time, formatting is broken
const CS = () => {
    return (
        <div>
            <h1>Video</h1>
            <YouTubeVideo videoId="dQw4w9WgXcQ" />
            <h2> Transcript</h2>
            <p>In Python, a for loop is used to iterate over a sequence (such as a list, tuple, string, or range) or other iterable objects. The basic syntax of a for loop in Python is as follows:

for variable in iterable:
    # Code to be executed in each iteration
Here's a detailed explanation of each part:

for keyword: It indicates the beginning of the loop.

variable: This is a variable that takes on the value of the next item in the iterable in each iteration. You can choose any valid variable name here.

in keyword: It separates the loop variable from the iterable.

iterable: This is the object or sequence over which the loop iterates. It can be a list, tuple, string, range, or any other iterable object.

Colon :: It is used to start a new code block that will be executed in each iteration of the loop.

The code inside the loop is executed for each item in the iterable. The loop continues until all items in the iterable have been processed.

Let's look at some examples:

Example 1: Iterate over a list:

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
Output:
apple
banana
cherry
Example 2: Iterate over a range:


for i in range(1, 5):
    print(i)
Output:
1
2
3
4

Example 3: Iterate over a string:

word = "Python"
for letter in word:
    print(letter)
Output:
P
y
t
h
o
n

You can also use the break statement to exit the loop prematurely, and the continue statement to skip the rest of the code in the current iteration and move to the next one. Additionally, the else clause can be used to specify a block of code to be executed when the loop is exhausted.</p>
            <h1> View Notes</h1>
            <h2> Human Notes</h2>
                Note-Taker did not submit notes or Note-Taker does not exist!
            <h2> AI Notes</h2>
            <img src={AICSNotes} alt="AI generated notes of a for loop example" />
        </div>
        
    )
}
export default CS;