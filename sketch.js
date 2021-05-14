var canvas,backgroundImage,gamestate=0
var playercount,database,form,player,gamestate
var allplayers

function setup(){
    canvas=createCanvas(400,400)
    database=firebase.database()
    game=new Game()
    game.getstate()
    game.start()
}
function draw(){
if(playercount===4){
    game.update(1)
}
if(gamestate===1){
    game.play()
}
}
