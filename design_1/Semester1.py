
def thankUser():
    print("Thank you for using my program")

moods = [
    "good",
    "bad"
]


tryAgain = True

while tryAgain:
    
    name = input ("Welcome! What is your name?: ")
    #Greeting and asking the user's name
    print("Hello" + name + " That's a beautiful name")
    
    temperature = input ("What is the temperature today?: ")
    #Asking the temperature

    # Display all moods one by one
    for mood in moods:
        print( mood )

    mood = input ("What is your mood today? (good, bad or inbetween): ")
    #Asking the user's mood

    if mood == moods[0]:
        print( "Great, you're feeling good")
    elif mood == moods[1]:
        print( "I'm sorry you're feeling like this")
    else: 
        print("It looks you're feeling neutral")

    tryAgain = input ("Try again? Enter y for yes, n for no: ")
    


    if tryAgain != "y": # not equal to y
       tryAgain = False

thankUser()



# if answer == 'yes':
# if answer != 'yes'
    