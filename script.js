const speakBtn = document.querySelector('button');

// speakBtn.onclick = function speak(){
//    console.log('Hello');
// };

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
   console.log('speech recognition started');
};


recognition.onresult = function (event) {
   console.log(event);
   const spokenwords = event.results[0][0].transcript;

   console.log('Spoken Words are',spokenwords);
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
   if(words.includes("hello")) {
      speech.text = "Heyyyyyyy";
   }

   if(words.includes("what is your name")) {
      speech.text = "My name is ABK";
   }
   if(words.includes("how are you doing")) {
      speech.text = "I am fine , thank you";
   }
   if(words.includes("who are you")) {
      speech.text = "I am habeebee , ABK new girlfriend!";
   }
     if(words.includes("what do you have to say to Abdul")) {
      speech.text = "Fuck you , Gaddau!";
   }
    if(words.includes("what do you have to say to Jalal")) {
      speech.text = "mmnnn , uhhhh , yeeaahh";
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
}) 

// window.addEventListener('load', ()=> {
//    computerSpeech("Activating Sepab");
//    greetMe();
// })
// window.addEventListener('load', greetMe);
