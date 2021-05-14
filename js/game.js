class Game{
    constructor(){
    }
    getstate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
   async start(){
if(gamestate===0){
    player=new Player()
    var playercountref=await database.ref("/playercount").once("value")
    if(playercountref.exists()){
playercount=playercountref.val()
player.getcount()
    }
    
    form=new Form()
    form.display()
}
    }
    play(){
form.hide()
textSize(30)
text("Game Start",120,100)
Player.getPlayerinfo()
if(allplayers!==undefined){
var displayposition=130
for(var plr in allplayers){
    displayposition+=20
    textSize(15)
    text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition)
    if(plr=="player"+player.index){
        fill("red")
    }
    else{
        fill("black")
    }
}
}
    }
}