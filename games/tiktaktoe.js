let gamestarted = false;
let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
let w = canvas.width;
let h = canvas.height;
let filled = [[0,0,0],[0,0,0],[0,0,0]];
let count = 0;

class play{
    constructor(symbol) {
        this.symbol = symbol;
        this.pos = [[0,0,0],[0,0,0],[0,0,0]];
        this.turn = false;
    }
    checkwinner() {
        if(this.pos[0].toString() == '1,1,1' || this.pos[1].toString() == '1,1,1' || this.pos[2].toString() == '1,1,1' || this.pos[0][0]+","+this.pos[1][0]+","+ this.pos[2][0] == '1,1,1' || this.pos[0][1]+","+this.pos[1][1]+","+ this.pos[2][1] == '1,1,1' || this.pos[0][2]+","+this.pos[1][2]+","+ this.pos[2][2] == '1,1,1' || this.pos[0][0]+","+this.pos[1][1]+","+ this.pos[2][2] == '1,1,1' || this.pos[0][2]+","+this.pos[1][1]+","+ this.pos[2][0] == '1,1,1'){
            alert("Spieler " + this.symbol + " hat gewonnen!");
            gamestarted = false;
            document.getElementById("start-btn").innerText = "Noch einmal spielen!";
            document.getElementById("instructions").innerHTML = "Spieler " + this.symbol + " hat gewonnen!";
        }
    };
}
let player1 = new play("X");
let player2 = new play("O");

function drawfield() {
    ctx.moveTo(w / 3, 10);
    ctx.lineTo(w / 3, h - 10);
    ctx.moveTo(2 * w / 3, 10);
    ctx.lineTo(2 * w / 3, h - 10);
    ctx.moveTo(10, h / 3);
    ctx.lineTo(w - 10, h / 3);
    ctx.moveTo(10, 2 * h / 3);
    ctx.lineTo(w - 10, 2 * h / 3);
    ctx.strokeStyle = 'rgb(118,114,114)';
    ctx.stroke();
}

let ximg = new Image();
ximg.src = 'x.png';
let yimg = new Image();
yimg.src = 'o.png';
drawfield();

canvas.addEventListener('click', function(e) {
    if(gamestarted){
            const rect = canvas.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let col;
            let row;
            if(x<w/3){
                x = 0;
                col = 0;
            }
            else if (x <2*w/3){
                x = w/3;
                col = 1;
            }
            else {
                x = 2*w/3;
                col = 2;
            }
            if(y<h/3){
                y = 0;
                row = 0;
            }
            else if (y <2*h/3){
                y = h/3;
                row = 1;
            }
            else {
                y = 2*h/3;
                row = 2;
            }
            if(player1.turn && !filled[col][row] ){
                ctx.drawImage(ximg,x+10,y+10, w/3 -20 ,h/3 -20);
                player1.turn = false;
                player2.turn = true;
                filled[col][row] = 1;
                player1.pos[col][row] = 1;
                document.getElementById("instructions").innerHTML = "Spieler 2 am Zug!";
                player1.checkwinner();
                count++;
            }
            else if(!filled[col][row]) {
                ctx.drawImage(yimg, x + 10, y + 10, w / 3 - 20, h / 3 - 20);
                player1.turn = true;
                player2.turn = false;
                filled[col][row] = 1;
                player2.pos[col][row] = 1;
                document.getElementById("instructions").innerHTML = "Spieler 1 am Zug!";
                player2.checkwinner();
                count++;
            }
            else
                alert("Already taken!");
            if(count==9 && gamestarted){
                alert("Unentschieden");
                gamestarted = false;
                document.getElementById("start-btn").innerText = "Noch einmal spielen!";
                document.getElementById("instructions").innerHTML = "Unentschieden!";
            }
    }
},false);


function startgame() {
    ctx.reset();
    drawfield();
    filled = [[0,0,0],[0,0,0],[0,0,0]];
    player1.pos = [[0,0,0],[0,0,0],[0,0,0]];
    player2.pos = [[0,0,0],[0,0,0],[0,0,0]];
    count = 0;
    player1.turn = true;
    gamestarted = true;
    document.getElementById("instructions").innerHTML = "Spieler 1 am Zug!";
    document.getElementById("start-btn").innerText = "Neu starten";
    document.getElementById("game-canvas").classList.remove("game-inactiv");
}



