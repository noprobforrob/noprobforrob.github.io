let i;
let questions;
let antw;


function startquiz() {
    for(let k = 1; k < 11; k++){
        document.getElementById(("fr"+(k))).classList.remove("bg-success");
        document.getElementById(("fr"+(k))).classList.remove("bg-danger");
    }
    document.getElementById("ergebnis").innerText = "";
    quizpoints = 0;
    i = 0;
    const req = fetch('https://the-trivia-api.com/v2/questions');
    req.then(re =>{return re.json()}).then(res2 => {questions = res2;
        nextquestion(questions);});
}

function nextquestion(res) {
    document.getElementById(("next-qu")).classList.remove("visible");
    document.getElementById(("next-qu")).classList.add("invisible");
    document.getElementById("frage").innerText = res[i].question.text;
    antw = [res[i].correctAnswer, res[i].incorrectAnswers[0], res[i].incorrectAnswers[1], res[i].incorrectAnswers[2]];

    let currentIndex = 4,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [antw[currentIndex], antw[randomIndex]] = [
            antw[randomIndex], antw[currentIndex]];
    }

    document.getElementById("antw-a").innerText = antw[0];
    document.getElementById("antw-b").innerText = antw[1];
    document.getElementById("antw-c").innerText = antw[2];
    document.getElementById("antw-d").innerText = antw[3];
}
function checkquestion(j) {
    if(antw[j] == questions[i].correctAnswer){
        document.getElementById(("fr"+(i+1))).classList.add("bg-success");
        document.getElementById(("fr"+(i+1))).classList.add("bg-opacity-75");
        document.getElementById(("next-qu")).classList.remove("invisible");
        document.getElementById(("next-qu")).classList.add("visible");
        ++i;
    }
    else{
        document.getElementById(("fr"+(i+1))).classList.add("bg-danger");
        document.getElementById(("fr"+(i+1))).classList.add("bg-opacity-75");
        document.getElementById(("fr"+(i+1))).classList.add("bg-success");
        document.getElementById("ergebnis").innerText = "Leider falsch, die richtige Antwort lautet: " + questions[i].correctAnswer +  ". Sie haben " + (i) + " Punkte erreicht!";
        document.getElementById("start-btn-quiz").innerText = "Noch einmal spielen!";
    }
    if(i==10){
        document.getElementById("ergebnis").innerText = "Sie haben alle Fragen richtig beantwortet!";
        document.getElementById("start-btn-quiz").innerText = "Noch einmal spielen!";
        document.getElementById(("next-qu")).classList.remove("visible");
        document.getElementById(("next-qu")).classList.add("invisible");
    }
}