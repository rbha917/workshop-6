# workshop-6

### Link to sketch: https://rbha917.github.io/workshop-6/ 

## Text & Language
### Using your own fonts
- have a local file, drag n drop into VSCode
- letfont1;
- preload function: font1 = loadFont('name of font.otf');
- textFont(font1);
- default text size is 20
## Generating a poem with inputs
- set up an input box
- create function for a new line per input
function newLine(){
	userLine = input.value(); //define userLine at top//
	input.value(''); //clears input box//
	poem.push(userLine); //define poem as array at top//
}
- create function for the poem
function writePoem(){
	for(x = 0; x < poem.length; x++){
		text(poem[x], 40, 180 + x * 20);
	}
}
## Adding RiTa.js to a sketch
- under index.html add in <script src="https://unpkg.com/rita"></script>
- Splitting up a string into separate words

function newLine(){
	userLine = input.value(); //define userLine at top//
	input.value(''); //clears input box//

	let words = RiTa.tokenize(userLine);//creates an array from the inputs//
	let f = floor(random(0, words.length)); //selects a random word from the array//
	let rhymes = RiTa.rhymesSync(words[f]); //find words that rhyme with that random word//
	if (rhymes.length === 0){ //if RiTa can't find any rhyming words//
		poem.push(userLine);
	} else {
		let changedWord = random(rhymes); //selects a random rhyming word//
		words[f] = changedWord; //replaces user's word with rhyming word//
		userLine = RiTa.untokenize(words); //puts the words back into a string//
		poem.push(userLine); //define poem as array at top//
	}


- Adding in a line of computer generated text
- let response;

function newLine(){
	userLine = input.value(); //define userLine at top//
	input.value(''); //clears input box//

	let words = RiTa.tokenize(userLine);//creates an array from the inputs//
	response = ''; //clears input, define response variable at top//
	for (x = 0; x < words.length; x++){
		if(RiTa.isNoun(words[x])){
			response += RiTa.randomWord({ pos: "nn"}); //if a noun is detected then it will be replaced by a random noun//
		} else {
			response += words[x];
		} //otherwise the line will print twice//
		response += ' '; //adds spaces between words//
	}
	poem.push(response); 
}
### Chatgpt assistance to change random noun to random verb
RiTa.randomWord({ pos: 'vb' }); //will replace with a random verb//
