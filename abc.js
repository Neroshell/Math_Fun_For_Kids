document.addEventListener('DOMContentLoaded', function() {

	var bar = document.querySelector("#bar");
	bar.addEventListener("click", openNav);

	function openNav() {
		document.getElementById("mySidenav").style.width = "60%";
	}

	var close = document.getElementById("closeNav");
	close.addEventListener("click", closeNav);

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}
});

function playSound(letter) {
	let audio = new Audio("audio/letter-" + letter + ".mp3");
	audio.play();
}

let allAudio = [
	"audio/letter-a.mp3", "audio/letter-b.mp3", "audio/letter-c.mp3", "audio/letter-d.mp3",
	"audio/letter-e.mp3", "audio/letter-f.mp3", "audio/letter-g.mp3", "audio/letter-h.mp3",
	"audio/letter-i.mp3", "audio/letter-j.mp3", "audio/letter-k.mp3", "audio/letter-l.mp3",
	"audio/letter-m.mp3", "audio/letter-n.mp3", "audio/letter-o.mp3", "audio/letter-p.mp3",
	"audio/letter-q.mp3", "audio/letter-r.mp3", "audio/letter-s.mp3", "audio/letter-t.mp3",
	"audio/letter-u.mp3", "audio/letter-v.mp3", "audio/letter-w.mp3", "audio/letter-x.mp3",
	"audio/letter-y.mp3", "audio/letter-z.mp3"
];


var buttons = document.querySelectorAll(".alpha-box");
let listenButton = document.querySelector(".listen-btn");
let remark = document.querySelector(".remark");
let wrong = document.querySelector(".wrong");
var audio2 = new Audio("audio/bell.wav");
var score = document.querySelector('.main-score');
var scoreValue = 0;
var playButton = document.querySelector('.play-btn');
var endgame = document.querySelector('.end-game');
var endgameValue = 26;
endgame.innerHTML = endgameValue;
var audio = new Audio("audio/buzzer.mp3");
var audio3 = new Audio("audio/end-round.mp3");
var tipBox = document.querySelector(".tip");
var clickTime = 0;





function playRandom() {



	playButton.style.display = "none";

	function repeatSound() {
		newSound.play();
	}

	listenButton.onclick = repeatSound;


	let alphabetData = [{
			letter: 'A',
			audio: 'audio/letter-a.mp3'
		},
		{
			letter: 'B',
			audio: 'audio/letter-b.mp3'
		},
		{
			letter: 'C',
			audio: 'audio/letter-c.mp3'
		},
		{
			letter: 'D',
			audio: 'audio/letter-d.mp3'
		},
		{
			letter: 'E',
			audio: 'audio/letter-e.mp3'
		},
		{
			letter: 'F',
			audio: 'audio/letter-f.mp3'
		},
		{
			letter: 'G',
			audio: 'audio/letter-g.mp3'
		},
		{
			letter: 'H',
			audio: 'audio/letter-h.mp3'
		},
		{
			letter: 'I',
			audio: 'audio/letter-i.mp3'
		},
		{
			letter: 'J',
			audio: 'audio/letter-j.mp3'
		},
		{
			letter: 'K',
			audio: 'audio/letter-k.mp3'
		},
		{
			letter: 'L',
			audio: 'audio/letter-l.mp3'
		},
		{
			letter: 'M',
			audio: 'audio/letter-m.mp3'
		},
		{
			letter: 'N',
			audio: 'audio/letter-n.mp3'
		},
		{
			letter: 'O',
			audio: 'audio/letter-o.mp3'
		},
		{
			letter: 'P',
			audio: 'audio/letter-p.mp3'
		},
		{
			letter: 'Q',
			audio: 'audio/letter-q.mp3'
		},
		{
			letter: 'R',
			audio: 'audio/letter-r.mp3'
		},
		{
			letter: 'S',
			audio: 'audio/letter-s.mp3'
		},
		{
			letter: 'T',
			audio: 'audio/letter-t.mp3'
		},
		{
			letter: 'U',
			audio: 'audio/letter-u.mp3'
		},
		{
			letter: 'V',
			audio: 'audio/letter-v.mp3'
		},
		{
			letter: 'W',
			audio: 'audio/letter-w.mp3'
		},
		{
			letter: 'X',
			audio: 'audio/letter-x.mp3'
		},
		{
			letter: 'Y',
			audio: 'audio/letter-y.mp3'
		},
		{
			letter: 'Z',
			audio: 'audio/letter-z.mp3'
		},

	];




	let randomValue = Math.floor(Math.random() * alphabetData.length);
	let newSound = new Audio(alphabetData[randomValue].audio);
	newSound.play();





	buttons.forEach(function(button) {
		button.onclick = function() {
			
         clickTime++;



			let correctLetter = alphabetData[randomValue].letter;
			if (correctLetter === button.textContent) {
				audio2.play();
				button.style.backgroundColor = 'green';
				remark.style.opacity = '1';
				remark.innerHTML = 'Correct letter!';
            remark.style.backgroundColor = 'green';
				

				scoreValue++;


				score.innerHTML = scoreValue;
				endgame.innerHTML = endgameValue;
				setTimeout(() => {
					playRandom();
				}, 2000);



				setTimeout(() => {
					remark.style.opacity = '0';
				}, 2000);
			} else {
				audio.play();
				remark.innerHTML = 'Wrong Letter! Try again';
				remark.style.opacity = '1';
				remark.style.backgroundColor = 'red';
				button.style.backgroundColor = 'red'; // Reset other buttons
				endgame.innerHTML = endgameValue;
				setTimeout(() => {

					remark.style.opacity = '0';
				}, 2000);

				setTimeout(() => {
					playRandom();
				}, 2000);


			}
		};
	});
};



playButton.addEventListener("click", () => {



	tipBox.style.display = "block";
	tipBox.innerHTML = 'Useful tip <br> Click on the corresponding letter';


	setTimeout(() => {
		tipBox.style.opacity = 1;
	}, 500);



	setTimeout(() => {
		tipBox.style.opacity = 0;
	}, 4000);

	setTimeout(() => {
		tipBox.style.display = "none";
	}, 4800);
	audio3.play();
	playButton.style.display = "none";

	setTimeout(() => {

		playRandom();


	}, 4000);


});






	function firstTip() {

		tipBox.innerHTML = "Learn the alphabets, click on the buttons"
		setTimeout(() => {
			tipBox.style.opacity = 1;
		}, 500);

		setTimeout(() => {
			tipBox.style.opacity = 0;
		}, 4000);

		setTimeout(() => {
			tipBox.style.display = 'none';
		}, 4800);


	}

	firstTip();
