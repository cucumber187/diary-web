const quotes = [
    {
        quote: " You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss"
    },
    {
        quote: "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
        author: "Rosa Parks"
    },
    {
        quote: "I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
        author: "Ann Richards"
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé"
    },
]

const quoteText = document.querySelector(".quotes-text");
const author = document.querySelector(".quotes-author");

const randomNumber = Math.floor(Math.random() * 10);

quoteText.innerText = quotes[randomNumber].quote;
author.innerText = `-${quotes[randomNumber].author}-`;