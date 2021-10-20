class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("enter the correct option number")
   //Create a input box to enter the number



    this.button = createButton('Submit');
    this.question = createButton("h3")
    this.option1 = createButton("h2")
    this.option2 = createButton("h2")
    this.option3 = createButton("h2")
    this.option4 = createButton("h2")
    this.message = createElement("h2")
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter?")
    this.question.position(150,80)
    this.option1.html("1: Everyone")
    this.option2.html("2: Envelope")
    this.option3.html("3: Example")
    this.option4.html("4: Estimate")
    this.option1.position(150,100)
    this.option2.position(150,120)
    this.option3.position(150,140)
    this.option4.position(150,160)

    this.input1.position(150, 230);
    this.input2.position(350, 230)
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Your Answer Is Recorded.")
    this.message.position(350,350)
    })


  }
}
