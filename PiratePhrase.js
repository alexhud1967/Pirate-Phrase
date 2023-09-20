// List of pirate phrases
const piratePhrases = {
  subjects: ["A salty sea dog", "A scurvy scallawag", "A bucko buccaneer", "A hearty harpooner", "A drunken deckhand", "A jolly sailor", "A thieving cutthroat", "A bloodthirsty pirate", "A hardy oarsman", "A cunning sea rat", "A brave explorer", "A bold adventurer"],
  verbs: ["buries", "sails", "fights", "finds", "drinks", "sings", "steals", "attacks", "rows", "escapes", "explores", "discovers"],
  objects: ["his booty", "the briny deep", "a kraken", "a treasure map", "grog", "a chantey", "a doubloon", "a merchant ship", "a longboat", "from the Royal Navy", "a deserted isle", "a new land"]
};

// Generate a random sentence
function generatePirateSentence() {
  const randomSubjectIndex = Math.floor(Math.random() * piratePhrases.subjects.length);
  const randomVerbIndex = Math.floor(Math.random() * piratePhrases.verbs.length);
  const randomObjectIndex = Math.floor(Math.random() * piratePhrases.objects.length);

  // Generate the sentence
  const sentence = `${piratePhrases.subjects[randomSubjectIndex]} ${piratePhrases.verbs[randomVerbIndex]} ${piratePhrases.objects[randomObjectIndex]}.`;

  return sentence;
}

// Generate a random question
function generatePirateQuestion() {
  const pirateSentence = generatePirateSentence();

  // Add a question mark to the end of the sentence
  const pirateQuestion = `${pirateSentence}?`;

  return pirateQuestion;
}

// Generate a random pirate sentence or question
function generateRandomPirateSentenceOrQuestion() {
  const randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    return generatePirateSentence();
  } else {
    return generatePirateQuestion();
  }
}

// Example usage:

console.log(generateRandomPirateSentenceOrQuestion());
