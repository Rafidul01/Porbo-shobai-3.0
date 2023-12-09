
const questions = [
    {
        question:'OS - computer abbreviation usually means ?',
        answers:[
            {text:'Order of Significance',correct:'false'},
            {text:'Open Software',correct:'false'},
            {text:'Operating System',correct:'true'},
            {text:'Optical Sensor',correct:'false'},
        ]
    },
    
    {
        question:'Who developed Yahoo?',
        answers:[
            {text:'Dennis Ritchie & Ken Thompson',correct:'false'},
            {text:'David Filo & Jerry Yang',correct:'true'},
            {text:'Vint Cerf & Robert Kahn',correct:'false'},
            {text:'Steve Case & Jeff Bezos',correct:'false'},
        ]
    },
    {
        question:'Which one is  the first search engine in internet ?',
        answers:[
            {text:'Google',correct:'false'},
            {text:'Altavista',correct:'false'},
            {text:'Archie',correct:'true'},
            {text:'WAIS',correct:'false'},
        ]
    },
    {
        question:'A modern TV screen is made of -',
        answers:[
            {text:'Thin Film Transistor',correct:'false'},
            {text:'Liquid Crystal',correct:'false'},
            {text:'Cathode Ray Tube',correct:'false'},
            {text:'Light Emitting Diode',correct:'true'},
        ]
    },
    {
        question:'Who discovered Penicillin ?',
        answers:[
            {text:'Alexander Fleming',correct:'true'},
            {text:'Joseph Lister',correct:'false'},
            {text:'Robert Koch',correct:'false'},
            {text:'W.Roentgen',correct:'false'},
        ]
    },
    
    ];
    
    const questionElement =document.getElementById('question');
    const answerButton =document.getElementById('answer-option-btn');
    const nextButton =document.getElementById('next-btn');
    
    let currentQuestionIndex=0;
    let score=0;
    
    function startQuiz(){
        currentQuestionIndex=0;
         score=0;
         nextButton.innerHTML="Next";
         showQuestion();
    }
    function showQuestion(){
    
        resetState();
    
        let currentQuestion=questions[currentQuestionIndex];
        let questionNo=currentQuestionIndex+1;
        questionElement.innerHTML=questionNo+'. '+currentQuestion.question;
    
    
        currentQuestion.answers.forEach(answer => {
            const button=document.createElement('button');
            button.innerHTML=answer.text;
            button.classList.add('btn');
            answerButton.appendChild(button);
    
    
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener('click',selectAnswer);
        });
    
    }
    
    function resetState(){
        nextButton.style.display="none";
        while(answerButton.firstChild){
          answerButton.removeChild(answerButton.firstChild); 
        }
    }
    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct==="true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
           score++; 
        }
        else selectedBtn.classList.add("incorrect");
    
    
        Array.from(answerButton.children).forEach(button => {
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display="block";
    
    }
    function  showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play Again!!"
        nextButton.style.display="block";
    }
    function handleNexteButton(){
        currentQuestionIndex++;
    
    
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    
    }
    
    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<questions.length){
            handleNexteButton();
        }
        else{
            startQuiz();
        }
    })
    
    startQuiz();

