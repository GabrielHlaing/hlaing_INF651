function guessingGame(){
    const theNumber = Math.floor(Math.random() * 10) + 1;
    let guessNum = 0;
    while(guessNum !== theNumber){
        guessNum = Number(prompt("Pick a number"));

        if(guessNum === theNumber){
            window.alert("Bingo!\nThe correct number is " + theNumber);
            break;
        }
    }while(guessNum !== theNumber)
    return;
}

function passwordValidation(){
    const thePassword = prompt("Set your password.");
    let repeatPw;
    do{
        repeatPw = prompt("Re-enter your password.")

        if(repeatPw === thePassword){
            window.alert("Yor password is set!");
            break;
        }
    }while(repeatPw !== thePassword)
}

function multiplicationTable(){
    const multNum = Number(prompt("Enter a number"));
    window.alert("Check console for the multiplication table.");

    for(let i = 1; i <= 10; i++){
        console.log(multNum + " x " + i + " = " + (multNum * i));
    }
}

function gradeEvaluation(){
    let theGrade = Number(prompt("Enter your grade"));
    while(theGrade < 0 || theGrade > 100){
        theGrade = Number(prompt("Invalid number! Enter a number between 0 and 100"));
    }
    
    if(theGrade >= 90)
        window.alert("A");
    else if(theGrade >=80)
        window.alert("B");
    else if(theGrade >=70)
        window.alert("C");
    else if(theGrade >=60)
        window.alert("D");
    else 
        window.alert("F");
}

function dayFinder(){
    let theDay = Number(prompt("Enter a number between 1 and 7"));
    while(theDay < 1 || theDay > 7){
        theDay = Number(prompt("Invalid number! Enter a number between 1 and 7"));
    }

    switch(theDay){
    case 1: window.alert("Sunday"); break;
    case 2: window.alert("Monday"); break;
    case 3: window.alert("Tuesday"); break;
    case 4: window.alert("Wednesday"); break;
    case 5: window.alert("Thursday"); break;
    case 6: window.alert("Friday"); break;
    case 7: window.alert("Saturday"); break; 
    }
}