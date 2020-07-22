let btn = document.getElementById('btn');
let output = document.getElementById('output');
let games = [
    'What’s the one word you’d use to describe yourself?',
    'What one skill or talent would you like to develop?',
    'What’s Your Favorite Year?',
    'If you were stranded on a desert island what one book would you have with you?',
    'What Annoys You?',
    'Imagine you are in a movie. What song would play when you walk into a scene?',
    'Pick one person in the team and make him a portrait on a piece of paper',
    'You are on death row the night before your execution. What would your last meal be?',
    'Write a fragment of a sentence in the chat room. Now ask others to complete it.',
    'Describe your current mood in one word',
];

btn.addEventListener('click', function(){
    let randomQuote = games[Math.floor(Math.random() * games.length)];
    output.innerHTML = randomQuote;
})
