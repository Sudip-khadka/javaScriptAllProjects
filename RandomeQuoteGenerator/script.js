

const quotes = [
    { id: 1, author: 'Nelson Mandela', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
    { id: 2, author: 'Walt Disney', quote: 'The way to get started is to quit talking and begin doing.' },
    { id: 3, author: 'Steve Jobs', quote: 'Your time is limited, don\'t waste it living someone else\'s life.' },
    { id: 4, author: 'Eleanor Roosevelt', quote: 'The future belongs to those who believe in the beauty of their dreams.' },
    { id: 5, author: 'Mother Teresa', quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.' },
    { id: 6, author: 'Albert Einstein', quote: 'Strive not to be a success, but rather to be of value.' },
    { id: 7, author: 'William Shakespeare', quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool.' },
    { id: 8, author: 'Abraham Lincoln', quote: 'In the end, it\'s not the years in your life that count. It\'s the life in your years.' },
    { id: 9, author: 'Helen Keller', quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.' },
    { id: 10, author: 'Mark Twain', quote: 'The secret of getting ahead is getting started.' },
    { id: 11, author: 'Martin Luther King Jr.', quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.' },
    { id: 12, author: 'Mahatma Gandhi', quote: 'Be the change that you wish to see in the world.' },
    { id: 13, author: 'Maya Angelou', quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.' },
    { id: 14, author: 'Socrates', quote: 'The only true wisdom is in knowing you know nothing.' },
    { id: 15, author: 'Buddha', quote: 'The mind is everything. What you think you become.' },
    { id: 16, author: 'Confucius', quote: 'It does not matter how slowly you go as long as you do not stop.' },
    { id: 17, author: 'Ralph Waldo Emerson', quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.' },
    { id: 18, author: 'John Lennon', quote: 'Life is what happens when you\'re busy making other plans.' },
    { id: 19, author: 'Aristotle', quote: 'It is during our darkest moments that we must focus to see the light.' },
    { id: 20, author: 'Oprah Winfrey', quote: 'The biggest adventure you can take is to live the life of your dreams.' },
    { id: 21, author: 'George Bernard Shaw', quote: 'Life isn\'t about finding yourself. Life is about creating yourself.' },
    { id: 22, author: 'Vincent Van Gogh', quote: 'I would rather die of passion than of boredom.' },
    { id: 23, author: 'Henry David Thoreau', quote: 'Go confidently in the direction of your dreams! Live the life you’ve imagined.' },
    { id: 24, author: 'Leo Tolstoy', quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.' },
    { id: 25, author: 'Charles Darwin', quote: 'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.' },
    { id: 26, author: 'Pablo Picasso', quote: 'Everything you can imagine is real.' },
    { id: 27, author: 'Friedrich Nietzsche', quote: 'Without music, life would be a mistake.' },
    { id: 28, author: 'Winston Churchill', quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' },
    { id: 29, author: 'Rosa Parks', quote: 'I have learned over the years that when one\'s mind is made up, this diminishes fear.' },
    { id: 30, author: 'Benjamin Franklin', quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.' },
    { id: 31, author: 'Anne Frank', quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.' },
    { id: 32, author: 'Galileo Galilei', quote: 'You cannot teach a man anything; you can only help him find it within himself.' },
    { id: 33, author: 'Stephen Hawking', quote: 'Intelligence is the ability to adapt to change.' },
    { id: 34, author: 'J.K. Rowling', quote: 'It is our choices, that show what we truly are, far more than our abilities.' },
    { id: 35, author: 'Frida Kahlo', quote: 'Feet, what do I need them for if I have wings to fly.' },
    { id: 36, author: 'Dalai Lama', quote: 'Happiness is not something ready made. It comes from your own actions.' },
    { id: 37, author: 'Plato', quote: 'Wise men speak because they have something to say; fools because they have to say something.' },
    { id: 38, author: 'Albert Camus', quote: 'In the depth of winter, I finally learned that within me there lay an invincible summer.' },
    { id: 39, author: 'Ernest Hemingway', quote: 'The only way to do great work is to love what you do.' },
    { id: 40, author: 'J.R.R. Tolkien', quote: 'Not all those who wander are lost.' },
    { id: 41, author: 'John F. Kennedy', quote: 'Ask not what your country can do for you — ask what you can do for your country.' },
    { id: 42, author: 'Albert Schweitzer', quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.' },
    { id: 43, author: 'Heraclitus', quote: 'The only constant in life is change.' },
    { id: 44, author: 'Barack Obama', quote: 'Change will not come if we wait for some other person or some other time. We are the ones we\'ve been waiting for. We are the change that we seek.' },
    { id: 45, author: 'Sigmund Freud', quote: 'One day, in retrospect, the years of struggle will strike you as the most beautiful.' },
    { id: 46, author: 'Neil Armstrong', quote: 'That\'s one small step for man, one giant leap for mankind.' },
    { id: 47, author: 'Johann Wolfgang von Goethe', quote: 'Knowing is not enough; we must apply. Willing is not enough; we must do.' },
    { id: 48, author: 'Bruce Lee', quote: 'The successful warrior is the average man, with laser-like focus.' },
    { id: 49, author: 'Emily Dickinson', quote: 'Hope is the thing with feathers that perches in the soul - and sings the tunes without the words - and never stops at all.' },
    { id: 50, author: 'Thomas Edison', quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.' },
    { id: 51, author: 'Rumi', quote: 'The wound is the place where the Light enters you.' },
    { id: 52, author: 'Coco Chanel', quote: 'The most courageous act is still to think for yourself. Aloud.' },
    { id: 53, author: 'Ralph Waldo Emerson', quote: 'Do not be too timid and squeamish about your actions. All life is an experiment.' },
    { id: 54, author: 'Leo Tolstoy', quote: 'If you want to be happy, be.' },
    { id: 55, author: 'C.S. Lewis', quote: 'You are never too old to set another goal or to dream a new dream.' },
    { id: 56, author: 'Walt Whitman', quote: 'Keep your face always toward the sunshine - and shadows will fall behind you.' },
    { id: 57, author: 'Fyodor Dostoyevsky', quote: 'Taking a new step, uttering a new word, is what people fear most.' },
    { id: 58, author: 'Virginia Woolf', quote: 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.' },
    { id: 59, author: 'Stephen King', quote: 'Get busy living or get busy dying.' },
    { id: 60, author: 'Hermann Hesse', quote: 'Some of us think holding on makes us strong, but sometimes it is letting go.' },
    { id: 61, author: 'Friedrich Nietzsche', quote: 'That which does not kill us makes us stronger.' },
    { id: 62, author: 'Ralph Waldo Emerson', quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.' },
    { id: 63, author: 'Napoleon Hill', quote: 'Whatever the mind of man can conceive and believe, it can achieve.' },
    { id: 64, author: 'Helen Keller', quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.' },
    { id: 65, author: 'Pablo Neruda', quote: 'You can cut all the flowers but you cannot keep Spring from coming.' },
    { id: 66, author: 'Emily Dickinson', quote: 'We never know how high we are till we are called to rise.' },
    { id: 67, author: 'Anne Frank', quote: 'Think of all the beauty still left around you and be happy.' },
    { id: 68, author: 'Marcus Aurelius', quote: 'The happiness of your life depends upon the quality of your thoughts.' },
    { id: 69, author: 'Maya Angelou', quote: 'We may encounter many defeats but we must not be defeated.' },
    { id: 70, author: 'Paulo Coelho', quote: 'When you want something, all the universe conspires in helping you to achieve it.' },
    { id: 71, author: 'Eleanor Roosevelt', quote: 'Do one thing every day that scares you.' },
    { id: 72, author: 'Albert Schweitzer', quote: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.' },
    { id: 73, author: 'Lao Tzu', quote: 'The journey of a thousand miles begins with one step.' },
    { id: 74, author: 'Helen Keller', quote: 'The best way to predict the future is to create it.' },
    { id: 75, author: 'Coco Chanel', quote: 'In order to be irreplaceable one must always be different.' },
    { id: 76, author: 'Maya Angelou', quote: 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.' },
    { id: 77, author: 'George Eliot', quote: 'It is never too late to be what you might have been.' },
    { id: 78, author: 'Ayn Rand', quote: 'The question isn\'t who is going to let me; it\'s who is going to stop me.' },
    { id: 79, author: 'Audrey Hepburn', quote: 'Nothing is impossible, the word itself says \'I\'m possible\'!' },
    { id: 80, author: 'Dalai Lama', quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.' },
    { id: 81, author: 'Vincent Van Gogh', quote: 'I would rather die of passion than of boredom.' },
    { id: 82, author: 'Marcus Aurelius', quote: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.' },
    { id: 83, author: 'Martin Luther King Jr.', quote: 'The time is always right to do what is right.' },
    { id: 84, author: 'Walt Disney', quote: 'All our dreams can come true, if we have the courage to pursue them.' },
    { id: 85, author: 'Eleanor Roosevelt', quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.' },
    { id: 86, author: 'Maya Angelou', quote: 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.' },
    { id: 87, author: 'Albert Einstein', quote: 'Strive not to be a success, but rather to be of value.' },
    { id: 88, author: 'Audrey Hepburn', quote: 'The most important thing is to enjoy your life - to be happy - it\'s all that matters.' },
    { id: 89, author: 'J.K. Rowling', quote: 'It is our choices, Harry, that show what we truly are, far more than our abilities.' },
    { id: 90, author: 'Mark Twain', quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.' },
    { id: 91, author: 'John Lennon', quote: 'Life is what happens when you\'re busy making other plans.' },
    { id: 92, author: 'Confucius', quote: 'Our greatest glory is not in never falling, but in rising every time we fall.' },
    { id: 93, author: 'Steve Jobs', quote: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.' },
    { id: 94, author: 'Winston Churchill', quote: 'Success consists of going from failure to failure without loss of enthusiasm.' },
    { id: 95, author: 'Leonardo da Vinci', quote: 'Simplicity is the ultimate sophistication.' },
    { id: 96, author: 'George Bernard Shaw', quote: 'Life isn\'t about finding yourself. Life is about creating yourself.' },
    { id: 97, author: 'Oscar Wilde', quote: 'Be yourself; everyone else is already taken.' },
    { id: 98, author: 'Bob Marley', quote: 'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.' },
    { id: 99, author: 'Albert Einstein', quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.' },
    { id: 100, author: 'Steve Jobs', quote: 'Stay hungry, stay foolish.' }
  ];

  //colors
  const colors = {
    color1: "#3498db",
    color2: "#2ecc71",
    color3: "#f1c40f",
    color4: "#e67e22",
    color5: "#9b59b6",
    color6: "#1abc9c",
    color7: "#e74c3c",
    color8: "#34495e",
    color9: "#95a5a6",
    color10: "#f39c12",
    color11: "#c0392b",
    color12: "#16a085"
};



function getRandomColor() {
    // Get a random color key from the colors object
    const colorKeys = Object.keys(colors);
    const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    // Return the corresponding color value
    return colors[randomColorKey];
}
// Fetching html elements id for Dom Manipulation 
let text = document.getElementById('text');
let author = document.getElementById('author');
let new_quote=document.getElementById('new-quote');
let tweet_quote=document.getElementById('tweet-quote');
// Function to display a random quote
function displayRandomQuote() {
   // Get random color
   const randomColor = getRandomColor();
   // Set body background color
   document.body.style.backgroundColor = randomColor;
    new_quote.style.backgroundColor=randomColor;
    tweet_quote.style.backgroundColor=randomColor;

    //set text color
    text.style.color=randomColor;
    author.style.color=randomColor;
  // Random number generator from 1 to 100
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  

  // Fetching random quote and author from Array
  let randomQuote = quotes.find(quote => quote.id === randomNumber);

  // Display random quote and author
  text.innerText =`" `+ randomQuote.quote + ` "`;
  author.innerText = "-" + randomQuote.author;

  // Store the last displayed quote ID in localStorage
  localStorage.setItem('lastDisplayedQuoteId', randomNumber);
}
// Function to be called when the page loads or refreshes
window.onload = function() {

    displayRandomQuote();
  
};
