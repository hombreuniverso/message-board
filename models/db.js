/*db*/

//Create a date variable for manipulation
const date = new Date();

//Array of messages
messages = [
  {
    user: "John",
    snippet: "Hi there!",
    details: "It is awesome!",
    added: date.toDateString(),
  },

  {
    user: "Charles",
    snippet: "Hello Universe!",
    details: "I love you!",
    added: date.toDateString(),
  },
];

module.exports = {
  messages,
};
