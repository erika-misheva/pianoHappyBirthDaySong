const keys = [
  'c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key',
  'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'
];

const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
  //console.log(document.getElementById(key));
})
console.log(notes);

const keyPlay = function (note) {
  console.log(note);
  note.style.backgroundColor = "#54a0e8";
}

const keyReturn = function (note) {
  note.style.backgroundColor = ""; // Fixed the typo here
}

function eventAssignment(note) {
  note.addEventListener('mousedown', function () {
    keyPlay(note);
  });
  note.addEventListener('mouseup', function () {
    keyReturn(note);
  });
}

notes.forEach(eventAssignment);

// Write a loop that runs the array elements through the function


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');
let seventhNote = document.getElementById('letter-note-seven');

// These statements are "hiding" all the progress buttons, but the first one

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextTwo.style.display = "flex";
  nextOne.style.display = "none";

  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = "C";
}
nextTwo.onclick = function () {
  nextThree.style.display = "flex";
  nextTwo.style.display = "none";
  document.getElementById("song-container2").style.width= "100%";
  document.getElementById("notes-container2").style.width= "75%";
  document.getElementById("word-five").innerHTML = "DEAR";
  document.getElementById("word-six").innerHTML = "FRI-";
  lastLyric.style.display = 'flex';
  seventhNote.style.display = 'flex';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = "E";
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = "B";
}


// Write anonymous event handler property and function for the second progress button
nextThree.onclick = function () {
  startOver.style.display = "flex";
  nextThree.style.display = "none";
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("word-three").innerHTML = "BIRTH";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("word-six").innerHTML = "YOU!";
  lastLyric.style.display = 'none';
  seventhNote.style.display = "none";
  document.getElementById("song-container2").style.width= "75%";
  document.getElementById("notes-container2").style.width= "50%";
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = "F";
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = "C";
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = "C";
}

// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.style.display = "flex";
  startOver.style.display = "none";
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}