var qBank = [
    {
      question: "Wait...So who really framed Roger Rabbit? I didnt actually watch the film...",
      choices: {
          a: "R.K. Maroon",
          b: "Jessica Rabbit",
          c: "Judge Doom",
          d: "Angelo"
      },
      answer: "a"
    },
    {
      question: "What is considered the most difficult body part to draw according to painters?",
      choices: {
          a: "Eyes",
          b: "Hands",
          c: "Clavicals",
          d: "Lips"
      },
      answer: "b"
    },
    {
      question: "What was the one truth that the Turtle of Truth told to Morty, from Rick and Morty, before he was tragically thrown into an infinite, cosmic abyss?",
      choices: {
          a: "The meaning of the universe",
          b: "Morty's ultimate fate",
          c: "That he is the real Paul McCartney",
          d: "The premiere date for Season 4"
      },
      answer: "c"
    },
    {
      question: "Who likes kicking butt in Bikini Bottom?",
      choices: {
          a: "Paco",
          b: "Lonnie",
          c: "Charlie",
          d: "Dave"
      },
      answer: "b"
    },
    {
      question: "What animal was once classfied as a 'fish' by the Catholic Church?",
      choices: {
          a: "Iguana",
          b: "Seagull",
          c: "Snail",
          d: "Capybara"
      },
      answer: "d"
    },
    {
      question: "Who was the first president born in a hospital?",
      choices: {
          a: "Calvin Coolidge",
          b: "Jimmy Carter",
          c: "John F Kennedy",
          d: "Ronald Reagan"
        },
        answer: "b"
    },
    {
      question: "What is a katzenklavier?",
      choices: {
          a: "Cat Piano",
          b: "Medical Apparatus",
          c: "A Type of Clarinet",
          d: "A French Cuisine"
        },
        answer: "a"
    },    
    {
      question: "What is Hello Kitty's nationality?",
      choices: {
          a: "Chinese",
          b: "American",
          c: "Japanese",
          d: "British"
        },
        answer: "d"
    }   
    
  ];
    
//   var timerOn = false;
//   var intervalId;
    
  var qBankAns = ["1","2","3","2","4","2","1","4"];
// for(var i = 0; i <qBank.length; i++){
//   qBankAns.push(qBank[i].answer)
// }
// console.log(qBankAns);   
    
    var counter = 0;    
    var time = 120;
    var intervalId;
    
    function run() {
      intervalId = setInterval(decrement, 1000);
      var displayTime = $("<h2>");
      displayTime.addClass("count");
      $("#quiz").append(displayTime);
   

    }
    
    function decrement() {
      
      time--;
      
      $(".count").text(time);
      
      if(time === 0){
        stop();
        timeUp();
      }
    }
      
    function stop() {
      clearInterval(intervalId);
    }
    
    
    function timeUp(){
    
      var userAnswers = $('.test');
      var checked = [];
      for (var i=0; i < userAnswers.length; i++){
      if(userAnswers[i].checked){
      checked.push(userAnswers[i].value)
        }
      }
     console.log(checked)
     for (var i = 0; i < checked.length; i++) {
     if(checked[i] !== qBankAns[i]){ 
     } else if (checked[i] === qBankAns[i]) {
      counter++;
       }
     }
  
    console.log(counter);
  
    var score = Math.round(counter / qBankAns.length * 100);
  
    console.log(score);
    $("#quiz").html("<h1> Your score is: "+ score + "</h1>");
   
      
    }
   
    
// rendering display 
$("#start").on('click', function(){ 
    //timer starts
    run();
    
  
    // removes start button and questions appear
  
    $("#start").css('display','none');
    for(var i = 0; i < qBank.length; i++) {
      $("#quiz").append("<h5>" + qBank[i].question + "</h5>");
      $("#quiz").append("<input type='radio' class='test' value='1' name='question" + i + "'" + "/>" + qBank[i].choices.a);
      $("#quiz").append("<input type='radio' class='test' value='2' name='question" + i + "'" + "/>" + qBank[i].choices.b);
      $("#quiz").append("<input type='radio' class='test' value='3' name='question" + i + "'" + "/>" + qBank[i].choices.c);
      $("#quiz").append("<input type='radio' class='test' value='4' name='question" + i + "'" + "/>" + qBank[i].choices.d);

    }
    var submit = $('<input/>').attr({ type: 'button', class: 'btn-secondary btn-lg', id:'submitButton', value:'Submit'});
    $("#quiz").append("<br><br>");
    $("#quiz").append(submit);
    console.log(submit);
 
 // someone: Ask David how to parse radio button data in order to check with user answers to correct answers 
$("#submitButton").on('click', function(){

  var userAnswers = $('.test');
  var checked = [];
  for (var i=0; i < userAnswers.length; i++){
    if(userAnswers[i].checked){
      checked.push(userAnswers[i].value)
    }
  }
  console.log(checked)
  for (var i = 0; i < checked.length; i++) {
    if(checked[i] !== qBankAns[i]){ 
    } else if (checked[i] === qBankAns[i]) {
      counter++;
    }
  }
  
  console.log(counter);
  
  var score = Math.round(counter / qBankAns.length * 100);
  
  console.log(score);
  $("#quiz").html("<h1> Your score is: "+ score + "</h1>");
  
  
}); 
  

// results = user correct score versus incorrect score = total score, time completed
  

// render resultsuserAnswer
  

// countdown clock
  

  
  
  
  
});  
    
  
  
  
  