const NecroKnower = ["Necro", "Knower"];
console.log(NecroKnower);
const quizQuestions = [
  {
    question: "Choose a weapon:",
    answers: [
      {
        type: "Necro",
        content: "Throwing Knives",
      },
      {
        type: "Fixer",
        content: "Quarterstaff",
      },
      {
        type: "Blaster",
        content: "Longsword",
      },
      {
        type: "Knower",
        content: "Bow and Arrow",
      },
    ],
  },

  {
    question: "Extrovert or Introvert?",
    answers: [
      {
        type: "Necro Knower",
        content: "Introvert",
      },
      {
        type: "Fixer Blaster",
        content: "Extrovert",
      },
    ],
  },
  {
    question: "Pick one:",
    answers: [
      {
        type: "Necro",
        content: "Torch",
      },
      {
        type: "Fixer",
        content: "River",
      },
      {
        type: "Blaster",
        content: "Knife",
      },
      {
        type: "Knower",
        content: "Tree",
      },
    ],
  },
  {
    question: "Sun or Moon?",
    answers: [
      {
        type: "Necro, Knower",
        content: "Moon",
      },
      {
        type: "Fixer, Blaster",
        content: "Sun",
      },
    ],
  },
  {
    question: "Pick a Greek God:",
    answers: [
      {
        type: "Necro",
        content: "Hades",
      },
      {
        type: "Fixer",
        content: "Artemis",
      },
      {
        type: "Blaster",
        content: "Poseidon",
      },
      {
        type: "Knower",
        content: "Athena",
      },
    ],
  },
  {
    question: "Dogs or Cats?",
    answers: [
      {
        type: "Necro, Knower",
        content: "Cat",
      },
      {
        type: "Fixer, Blaster",
        content: "Dog",
      },
    ],
  },
  {
    question: "Who are you in your friend group?",
    answers: [
      {
        type: "Necro",
        content: "The Loner/Outsider",
      },
      {
        type: "Fixer",
        content: "The Mom Friend",
      },
      {
        type: "Blaster",
        content: "The Party Animal",
      },
      {
        type: "Knower",
        content: "The Planner",
      },
    ],
  },
  {
    question: "You are lost in the woods. What do you do?",
    answers: [
      {
        type: "Necro",
        content: "Observe moss growth patterns and navigate home",
      },
      {
        type: "Fixer",
        content: "Search for food and water",
      },
      {
        type: "Blaster",
        content: "Settle in and build a shelter",
      },
      {
        type: "Knower",
        content: "Venture out further and explore",
      },
    ],
  },
  {
    question: "What do you do to relax after a stressful day?",
    answers: [
      {
        type: "Necro",
        content: "Read a book",
      },
      {
        type: "Fixer",
        content: "Gardening",
      },
      {
        type: "Blaster",
        content: "Workout",
      },
      {
        type: "Knower",
        content: "Meditate",
      },
    ],
  },
  {
    question: "Would you like to know how or when you die?",
    answers: [
      {
        type: "Necro, Fixer",
        content: "No",
      },
      {
        type: "Blaster, Knower",
        content: "Yes",
      },
    ],
  },
  {
    question: "If you were to have an Animal Form, which would it be?",
    answers: [
      {
        type: "Necro, Knower",
        content: "Owl",
      },
      {
        type: "Fixer, Blaster",
        content: "Wolf",
      },
      {
        type: "Fixer, Blaster",
        content: "Bear",
      },
      {
        type: "Necro, Knower",
        content: "Panther",
      },
    ],
  },
  {
    question: "Your favorite extracurricular in high school was?",
    answers: [
      {
        type: "Necro",
        content: "Something in the arts",
      },
      {
        type: "Fixer",
        content: "Volunteer work",
      },
      {
        type: "Blaster",
        content: "Sports",
      },
      {
        type: "Knower",
        content: "Journalism/YearBook",
      },
    ],
  },
  {
    question: "There is a software glitch on your computer. How do you fix it?",
    answers: [
      {
        type: "Necro",
        content: "Get professional help from tech support",
      },
      {
        type: "Fixer",
        content: "Ask a tech savvy friend for help",
      },
      {
        type: "Blaster",
        content: "Have you tried turning it off and on again?",
      },
      {
        type: "Knower",
        content: "Assess it and fix it by yourself",
      },
    ],
  },
  {
    question: "You are trying to woo a potential mate! How do you do it?",
    answers: [
      {
        type: "Necro",
        content:
          "Write a song or make a playlist and play it for them at their bedroom window",
      },
      {
        type: "Fixer",
        content:
          "Get them their favorite breakfast beverage and pastry and leave it for them before first bell",
      },
      {
        type: "Blaster",
        content:
          "Make a “Do you like me? Check ‘yes’ or ‘no’” note and send it by parakeet",
      },
      {
        type: "Knower",
        content: "Ask their unit to find out if they’re interested",
      },
    ],
  },
  {
    question: "You have free time to read a book. What genre do you pick from?",
    answers: [
      {
        type: "Necro, Fixer",
        content: "Romance",
      },
      {
        type: "Necro, Knower",
        content: "Sci-Fi/Fantasy",
      },
      {
        type: "Fixer, Blaster",
        content: "Action/Adventure",
      },
      {
        type: "Blaster, Knower",
        content: "Suspense/Thriller",
      },
      {
        type: "Fixer, Knower",
        content: "Poetry",
      },
      {
        type: "Necro, Blaster",
        content: "Horror/Mystery",
      },
    ],
  },
  {
    question:
      "You’re planning a roadtrip with your friends. You are the one who...",
    answers: [
      {
        type: "Necro",
        content:
          "Brings the snacks and the music. Casts your vote whenever it’s needed",
      },
      {
        type: "Fixer",
        content:
          "Worries about the travel plans that someone else made. You’re basically the backup planner",
      },
      {
        type: "Blaster",
        content:
          "Had nothing to do with the planning (thankfully!). Probably drives the most",
      },
      {
        type: "Knower",
        content: "Makes the itinerary and does most of the planning",
      },
    ],
  },
  {
    question:
      "There is a mysterious wall of fibrous organic material. What do you do?",
    answers: [
      {
        type: "Necro",
        content: "Study it",
      },
      {
        type: "Fixer",
        content: "Touch it",
      },
      {
        type: "Blaster",
        content: "Kill it with fire",
      },
      {
        type: "Knower",
        content: "Try to see into it",
      },
    ],
  },
];

export default quizQuestions;
