const speakBtn = document.querySelector('button'),
btn = document.querySelector('button h3'),
talk = document.querySelector('h2');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
   console.log('speech recognition started');
   btn.textContent = "Listening...";

};


recognition.onresult = function (event) {
   console.log(event);
   const spokenwords = event.results[0][0].transcript;

   console.log('Spoken Words are',spokenwords);
   talk.textContent = spokenwords;
   btn.textContent = "Speak";
   computerSpeech(spokenwords);
}

function computerSpeech(words) {
   const speech = new SpeechSynthesisUtterance();
   speech.lang = "en-US"
   speech.pitch = 0.9;
   speech.volume = 1;
   speech.rate = 1;

   determineWords(speech, words);
   // speech.text = words;

   window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
   if(words.includes("Hello")) {
      speech.text = "Heyy";
      btn.textContent = "Speak";
   }

   if(words.includes("What is your name")) {
      speech.text = "My name is Giwa Favour";
      btn.textContent = "Speak";
   }
   if(words.includes("How are you doing")) {
      speech.text = "I am fine , thank you";
      btn.textContent = "Speak";
   }
   if(words.includes("Who are you")) {
      speech.text = "I am habeebee , ABK new girlfriend!";
      btn.textContent = "Speak";
   }
}

// function greetMe(){
//    let date = new Date();
//    let hr = date.getHours();

//    if(hr >= 0 && hr < 12){
//       computerSpeech("Good Morning Babe");
//    }else if(hr >= 12 && hr <= 16){
//       computerSpeech("Good Afternoon Babe");
//    }else if(hr > 16 && hr < 12){
//       computerSpeech("Good Evening Babe");
//    }
// }

speakBtn.addEventListener('click', () => {
   recognition.start();
   talk.textContent = '....'
}) 

// window.addEventListener('load', ()=> {
//    computerSpeech("Activating Sepab");
//    greetMe();
// })
// window.addEventListener('load', greetMe);
