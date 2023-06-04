let i;
let questions;
let antw;
let anzplayer = 0;
let btnactive = false;


function startquiz() {
document.getElementById("points-quiz").innerHTML = '<div class="col-1" id="fr1-'+ anzplayer +'">1</div>\n' +
    '                <div class="col-1" id="fr2-'+ anzplayer +'">2</div>\n' +
    '                <div class="col-1" id="fr3-'+ anzplayer +'">3</div>\n' +
    '                <div class="col-1" id="fr4-'+ anzplayer +'">4</div>\n' +
    '                <div class="col-1" id="fr5-'+ anzplayer +'">5</div>\n' +
    '                <div class="col-1" id="fr6-'+ anzplayer +'">6</div>\n' +
    '                <div class="col-1" id="fr7-'+ anzplayer +'">7</div>\n' +
    '                <div class="col-1" id="fr8-'+ anzplayer +'">8</div>\n' +
    '                <div class="col-1" id="fr9-'+ anzplayer +'">9</div>\n' +
    '                <div class="col-1" id="fr10-'+ anzplayer +'">10</div>\n' +
    '                <div class="col-12"></div>';
    document.getElementById("ergebnis").innerText = "";
    i = 0;
    const req = fetch('https://the-trivia-api.com/v2/questions');
    req.then(re =>{return re.json()}).then(res2 => {questions = res2;
        nextquestion(questions);});
}

function nextquestion(res) {
    btnactive = true;
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
    if(btnactive) {
        if (antw[j] == questions[i].correctAnswer) {
            document.getElementById(("fr" + (i + 1) + "-" + anzplayer)).classList.add("bg-success");
            document.getElementById(("fr" + (i + 1) + "-" + anzplayer)).classList.add("bg-opacity-75");
            document.getElementById(("next-qu")).classList.remove("invisible");
            document.getElementById(("next-qu")).classList.add("visible");
            ++i;
            btnactive=false;
        } else {
            document.getElementById(("fr" + (i + 1) + "-" + anzplayer)).classList.add("bg-danger");
            document.getElementById(("fr" + (i + 1) + "-" + anzplayer)).classList.add("bg-opacity-75");
            document.getElementById("ergebnis").innerText = "Leider falsch, die richtige Antwort lautet: " + questions[i].correctAnswer + ". Sie haben " + (i) + " Punkte erreicht!";
            document.getElementById("start-btn-quiz").innerText = "Noch einmal spielen!";
            document.getElementById(("next-player")).classList.add("visible");
            document.getElementById(("next-player")).classList.remove("invisible");
            btnactive=false;
        }
        if (i == 10) {
            document.getElementById("ergebnis").innerText = "Sie haben alle Fragen richtig beantwortet!";
            document.getElementById("start-btn-quiz").innerText = "Noch einmal spielen!";
            document.getElementById(("next-qu")).classList.remove("visible");
            document.getElementById(("next-qu")).classList.add("invisible");
            btnactive=false;
            document.getElementById(("next-player")).classList.add("visible");
            document.getElementById(("next-player")).classList.remove("invisible");
        }
    }
}
function nextplayer () {
    ++anzplayer;
    i = 0;
    document.getElementById("points-quiz").innerHTML += '<div class="col-1" id="fr1-'+ anzplayer +'">1</div>\n' +
        '                <div class="col-1" id="fr2-'+ anzplayer +'">2</div>\n' +
        '                <div class="col-1" id="fr3-'+ anzplayer +'">3</div>\n' +
        '                <div class="col-1" id="fr4-'+ anzplayer +'">4</div>\n' +
        '                <div class="col-1" id="fr5-'+ anzplayer +'">5</div>\n' +
        '                <div class="col-1" id="fr6-'+ anzplayer +'">6</div>\n' +
        '                <div class="col-1" id="fr7-'+ anzplayer +'">7</div>\n' +
        '                <div class="col-1" id="fr8-'+ anzplayer +'">8</div>\n' +
        '                <div class="col-1" id="fr9-'+ anzplayer +'">9</div>\n' +
        '                <div class="col-1" id="fr10-'+ anzplayer +'">10</div>\n' +
        '                <div class="col-12"></div>';
    document.getElementById("ergebnis").innerText = "";
    document.getElementById(("next-player")).classList.add("invisible");
    document.getElementById(("next-player")).classList.remove("visible");
    nextquestion(questions);
}