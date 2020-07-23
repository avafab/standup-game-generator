let btn = document.getElementById('btn');
let output = document.getElementById('output');
let games = [
    //Games
    'Imagine you are in a movie. What song would play when you walk into a scene?',
    'Pick one person in the team and make him a portrait on a piece of paper',
    'Write a fragment of a sentence in the chat room. Now ask others to complete it.',
    'Describe your current mood in one word',
    'Tell us a story about something you’re wearing',
    'Imitate your own professional meeting voice.',
    'Sometimes I pretend to know how to [insert skill.]',
    //Questions
    'Where would you travel if you knew there was a chance you would have to stay there for up to a year?',
    'If you had to choose one car to drive forever, what would you pick?',
    'If you could keep only one appliance in your house, which one would you choose and why?',
    'What’s the one word you’d use to describe yourself?',
    'What one skill or talent would you like to develop?',
    'What’s Your Favorite Year?',
    'If you were stranded on a desert island what one book would you have with you?',
    'What Annoys You?',
    'What was the strangest non-scary dream you ever had? ',
    'What is your re-occurring dream? ',
    'You are on death row the night before your execution. What would your last meal be?',
    'What excuse do you use all the time?',
    'How would you say your name if you were an alien?',
    'If you were a condiment, what would you be, and why?',
    'What’s something you wish you could stop people from assuming about you?',
    'What would your historical nickname be?',
    'If you could go back in time and pay more attention to any class in high school, what would you choose?',
    'What was the first thing you thought about when you woke up this morning?',
    'Would you be willing to fight in one of the past wars?',
    'If you could have credit for any invention in history, what would you choose?',
    'If you were a refrigerator, what item would you hate holding?',
    'What’s the strangest thing you’ve ever been asked to do during a meeting?',
    'What did your 5th grade teacher say about you during your parent-teacher conference?',
    'What was the silliest thing you or someone else has ever said during a meeting?',
    'What is your first memory speaking in front of a group?',
    'When was the last time you felt like you were “in trouble”?',
    'What would your name be if your first name was your father’s middle name and your last name was your childhood favorite food?',
    'If you had to replace your legs with the legs of an animal, what would you choose?',
    'What do you think this meeting is about?',
    'What’s something you would change if you ran the world?',
    'What talent would you show off in a talent show?',
    'What three hashtags describe your work persona? What three hashtags describe your social persona?',
    'What’s your campaign slogan if you’re running for public office?',
    'What is your most used emoji?',
    'What is one place you never ever want to go?',
    'If you could pick up a new skill in an instant what would it be?',
    'What is the most embarrassing thing you accidentally messaged to someone?',
    'What world problem do you think you have the solution to?',
    'Do you find time passing differently when you work from home vs. when you work in the office?',
    'Do you identify more with coffee or tea? Why?',
    'Are there any shows you pretend you don’t watch when people ask you?',
    'Do you ever think your parents gave you the wrong name?',
    'What do you think about when you’re driving?',

];

btn.addEventListener('click', function(){
    let randomQuote = games[Math.floor(Math.random() * games.length)];
    output.innerHTML = randomQuote;
})
