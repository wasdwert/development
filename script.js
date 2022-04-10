var myGamePiece;
var counter=0;
var p=0;

function StartGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width,height,symbol,circle,x,y) {
    this.circle = new Image();
    this.circle.src = circle;
    this.symbol = new Image();
    this.symbol.src = symbol;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.circle, this.x-3, this.y-3, this.width+6, this.height+6);
        ctx.drawImage(this.symbol, this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    window.addEventListener('mousemove', function (e) {
        cRect = canvas.getBoundingClientRect();
        updateGameArea.x = Math.round(e.clientX - cRect.left);
        updateGameArea.y = Math.round(e.clientY - cRect.top);
        p = myGameArea.context.getImageData(updateGameArea.x, updateGameArea.y, 1, 1).data;
        if (p[3] !=0) {
            p =1;
        }
    }) 
    myGameArea.clear();
    if (counter==0) {
        counter +=250;
        myGamePiece = new component(20, 20, "Images/bonsai.svg", "Images/circle.svg", CanvasPosition(1, 579), CanvasPosition(1, 279));
        if (p==1) {
      
            myGamePiece = new component();
            console.log("Piece touched");
        }
        myGamePiece.update();
    }
    else {
        if (p==1) {
            
            myGamePiece = new component();
            console.log("Piece touched");
        }
        myGamePiece.update();
        counter -=1;
    }
}

function CanvasPosition(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}