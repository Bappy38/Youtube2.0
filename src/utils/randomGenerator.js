const nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring',
    'Power','Falling', 'Fall','Jump',
    'Cliff','Mountain','Rend','Red',
    'Blue', 'Green','Yellow','Gold',
    'Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory',
    'Trooper','XX','Bandit', 'Fear',
    'Light','Glow','Tread', 'Deep',
    'Deeper','Deepest', 'Mine','Your',
    'Worst','Enemy','Hostile','Force',
    'Game','Donkey','Mule','Colt',
    'Cult','Cultist','Magnum', 'Gun'
];
export function getRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

const sentenceList = [
    "He strives to keep the best lawn in the neighborhood.",
    "Truth in advertising and dinosaurs with skateboards have much in common.",
    "The truth is that you pay for your lifestyle in hours",
    "Instead of a bachelorette party",
    "I've always wanted to go to Tajikistan, but my cat would miss me.",
    "If any cop asks you where you were, just say you were visiting Kansas.",
    "Every manager should be able to recite at least ten nursery rhymes backward.",
    "It turns out you don't need all that stuff you insisted you did.",
    "A suit of armor provides excellent sun protection on hot days.",
    "He was so preoccupied with whether or not he could that he failed to stop to consider if he should.",
    "To the surprise of everyone, the Rapture happened yesterday but it didn't quite go as expected.",
    "Fluffy pink unicorns are a popular status symbol among macho men.",
    "As the rental car rolled to a stop on the dark road, her fear increased by the moment.",
    "While on the first date he accidentally hit his head on the beam.",
    "She was too busy always talking about what she wanted to do to actually do any of it."
]
export function getRandomSentence() {
    return sentenceList[Math.floor( Math.random() * sentenceList.length )];
 };

 
 var incrementalId = 0;
 export function getIncrementalId() {
    return ++incrementalId;
 }