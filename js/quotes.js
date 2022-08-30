const quotes = [
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    quote:
      "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    quote:
      "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
  },
  {
    quote:
      "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
    author: "Friedrich Nietzsche",
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
