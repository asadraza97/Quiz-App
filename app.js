const questions = [
  {
    ques: "What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Hypertext Markup Language",
    c: "Home Tool Markup Language",
    d: "None of the above",
    correctOption: "b",
  },
  {
    ques: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correctOption: "b",
  },
    {
      ques: "What does CSS stands for?",
      a: "Hypertext Markup Language",
      b: "Casecading Style Sheet",
      c: "Jasan Object Notation",
      d: "Home Tool Markup Language",
      correctOption: "b",
    },
    {
      ques: "Which of the following is a markup?",
      a: "CSS",
      b: "Javascript",
      c: "PHP",
      d: "HTML",
      correctOption: "d",
    },
    {
      ques: "Who is making the Web standards?",
      a: "Google",
      b: "Microsoft",
      c: "The World Wide Web Consortium",
      d: "All of these",
      correctOption: "c",
    },
    {
      ques: "Choose the correct HTML element for the largest heading:",
      a: "<heading>",
      b: "<h6>",
      c: "<h2>",
      d: "<h1>",
      correctOption: "d",
    },
    {
      ques: "What is the correct HTML element for inserting a line break?",
      a: "<linebreak>",
      b: "<br>",
      c: "<break>",
      d: "</br>",
      correctOption: "b",
    },
    {
      ques: "What is the correct HTML for adding a background color?",
      a: '<body style="background-color:yellow;">',
      b: "<background>yellow</background>",
      c: "<head>yellow</head>",
      d: '<body bg="yellow">',
      correctOption: "a",
    },
    {
      ques: "Choose the correct HTML element to define important text:",
      a: "<strong>",
      b: "<b>",
      c: "<i>",
      d: "<em>",

      correctOption: "a",
    },
    {
      ques: "Choose the correct HTML element to define emphasized text:",
      a: "<italic>",
      b: "<i>",
      c: "<em>",
      d: "<strong>",

      correctOption: "c",
    },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1})  ${data.ques}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getanswer();
  console.log(ans, data.correctOption);
  if (ans == data.correctOption) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getanswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
      // console.log(input.value);
    }
  });
  return answer;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
   <h1> Quiz End </h1>  
   <h2> ${right} / ${total} are Correct </h2>  

    Your Right Answer is : ${right} & Wrong Answer is ${wrong}`;
};
loadQuestion();


// const questions = [
//      {
//     ques: 'What does HTML stand for?',
//     option1: 'Hyperlinks and Text Markup Language',
//     option2: 'Hypertext Markup Language',
//     option3: 'Home Tool Markup Language',
//     correctOption: "Hypertext Markup Language"
// },
// {
//     ques: 'Who is making the Web standards?',
//     option1: 'Google',
//     option2: 'The World Wide Web Consortium',
//     option3: 'Microsoft',
//     correctOption: "The World Wide Web Consortium"
// },
// {
//     question: 'Choose the correct HTML element for the largest heading:',
//     option1: '<heading>',
//     option2: '<h6>',
//     option3: '<h1>',
//     correctOption: "<h1>"
// },
// {
//     question: 'What is the correct HTML element for inserting a line break?',
//     option1: '<linebreak>',
//     option2: '<br>',
//     option3: '<break>',
//     correctOption: "<br>"
// },
// {
//     question: 'What is the correct HTML for adding a background color?',
//     option1: '<body bg="yellow">',
//     option2: '<background>yellow</background>',
//     option3: '<body style="background-color:yellow;">',
//     correctOption: '<body style="background-color:yellow;">'
// },
// {
//     question: 'Choose the correct HTML element to define important text:',
//     option1: '<strong>',
//     option2: '<b>',
//     option3: '<i>',
//     correctOption: '<strong>'
// },
// {
//     question: 'Choose the correct HTML element to define emphasized text:',
//     option1: '<italic>',
//     option2: '<i>',
//     option3: '<em>',
//     correctOption: "<em>"
// },
// {
//     question: 'What is the correct HTML for creating a hyperlink?',
//     option1: '<a>http://www.w3schools.com</a>',
//     option2: '<a href="http://www.w3schools.com">W3Schools</a>',
//     option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
//     correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
// },
// {
//     question: 'Which character is used to indicate an end tag?',
//     option1: '*',
//     option2: '/',
//     option3: '<',
//     correctOption: "/"
// },
// {
//     question: 'How can you open a link in a new tab/browser window?',
//     option1: '<a href="url" target="new">',
//     option2: '<a href="url" new>',
//     option3: '<a href="url" target="_blank">',
//     correctOption: '<a href="url" target="_blank">'
// },

// ]

// var ques = document.getElementById('question');
// var option1  = document.getElementById('option1');
// var option2  = document.getElementById('option2');
// var option3  = document.getElementById('option3');
// var index = 0;
// var btn = document.getElementById('btn');
// var score = 0;

// function nextQuestion(){
//     var options = document.getElementsByName('answer');
//     for (var i = 0; i <options.length; i++){
//         if(options[i].checked){
//             var selected = options[i].value
//             var userAns = questions[index -1][`option${selected}`]
//             var correctAns = questions[index - 1]. correctOption
//             if (userAns === correctAns ){
//                 score++;
//             }
//             // console.log();
//         }
//         options[i].checked = false;
//         btn.disabled = true;
//     }
//     if(index > questions.length- 1){
//         console.log('Question End');
//         // console.log((score / questions.length) * 100) ;
//         document.write((score / questions.length) * 100) ;
//     }else{
//     ques.innerHTML = questions[index].question;
//     option1.innerText = questions[index].option1;
//     option2.innerText = questions[index].option2;
//     option3.innerText = questions[index].option3;
//     index++;
// }
// }

// nextQuestion()

// function enableBtn(){
//     btn.disabled = false;
// }

// var min = 1;
// var sec = 10;

// var timer = document.getElementById('timer')
// var interval = setInterval(() => {
//     timer.innerHTML = `${min}: ${sec}`
//     sec--
//     if(sec < 0 ){
//         if(min < 1){
//             nextQuestion();
//             min = 1
//             sec = 10
//         }else{

//             min--
//             sec = 10;
//         }

//     }
// }, 1000);

// window.addEventListener('blur' , ()=>{
//     console.log('user tag change')
// })
