const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => {
    // split sentence into individual words, which returns an array
    let wordArr = sentence.split(' ');

    // capitalize first letter of each word and include the letters after the first letter
    let capitalizedWords = wordArr.map( word => word.charAt(0).toUpperCase() + word.slice(1) );

    // join all the resulting capitalized words
    let recomposed = capitalizedWords.join(' ');

    // return the recomposed sentence
    return recomposed;
  })
}