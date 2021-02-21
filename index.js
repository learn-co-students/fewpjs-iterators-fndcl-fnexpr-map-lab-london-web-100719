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

	let ret_arr = [];
	
	tutorials.map(element => {

		let str_arr = element.split(" ");
		let str = [];

		str_arr.map(word => {

			if (word.charAt(0) !== word.charAt(0).toUpperCase()) {

				word = word.charAt(0).toUpperCase() + word.slice(1);

			};

			str.push(word);

		});

		ret_arr.push(str.join(" "));

	});

	return ret_arr;

};