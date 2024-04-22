let input;
let userLine;
let poem = [];
let response;

function newLine(){
  userLine = input.value(); //define userLine at top//
  input.value(''); //clears input box//
  poem.push(userLine);

  let words = RiTa.tokenize(userLine);//creates an array from the inputs//
	response = ''; //clears input, define response variable at top//

	for (x = 0; x < words.length; x++){
    let word = words[x]    
		if(RiTa.isVerb(word)){
			response += RiTa.randomWord({ pos: "vb"})//if a noun is detected then it will be replaced by a random word//
    } else if(RiTa.isNoun(word)) {
      let rhymes = RiTa.rhymesSync(word); // Get rhyming words for the noun
      if (rhymes.length > 0) {
        let randomRhyme = random(rhymes); // Choose a random rhyming word
        response += randomRhyme;
      } else {
			  response += words[x];
		} //otherwise the line will print twice//
	} else {
    response += words[x];
  }
  response += ' '; //adds spaces between words//
  }
  poem.push(response);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
	input.position(20, 50);
  greeting = createElement('h3', 'Write a sentence for a poem');
	greeting.style('color', 'black');
	greeting.position(input.x, input.y - 45);


  let enter = createButton('ENTER')
	enter.position(input.x, input.y + 22);
	enter.mousePressed(newLine);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	}

  function writePoem(){
    for(x = 0; x < poem.length; x++){
      text(poem[x], 30, 120 + x * 20);
    }
  }

function draw() {
  background(220);
  textFont('Georgia');
  writePoem();
}

  // let words = RiTa.tokenize(userLine);//creates an array from the inputs//
	// let f = floor(random(0, words.length)); //selects a random word from the array//
	// let rhymes = RiTa.rhymesSync(words[f]); //find words that rhyme with that random word//
	// if (rhymes.length === 0){ //if RiTa can't find any rhyming words//
	// 	poem.push(userLine);
	// } else {
	// 	let changedWord = random(rhymes); //selects a random rhyming word//
	// 	words[f] = changedWord; //replaces user's word with rhyming word//
	// 	userLine = RiTa.untokenize(words); //puts the words back into a string//
	// 	poem.push(userLine); //define poem as array at top//
	// }