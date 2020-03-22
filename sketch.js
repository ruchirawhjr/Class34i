var ball;
var database,postion;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";
    var locofchild = database.ref("Ball/Positions")
    locofchild.on("value", readPos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("Ball/Positions").set({
        x:position.x+x, 
        y:position.y+y
    })
    ball.x = ball.x + x; 
    ball.y = ball.y + y;
}

function readPos(data) {
   position = data.val();
   ball.x = position.x;
   ball.y = position.y;

}