class Game{
    constuctor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        });
        
    } 
    start(){
        if (gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();  
            form.display(); 
        }
        car1=createSprite(100,200);
        car2=createSprite(300,200);
        car3=createSprite(500,200);
        car4=createSprite(700,200);
        cars=[car1, car2, car3, car4];
    }
    play(){
        form.hide();
        //textSize(30);
        //text("GO!", 120, 100);
        Player.getPlayerInfo();
        var index=0; //index of array
        //x and y position of car sprites
        var x=0;
        var y;
        //for-in loop
        if(allPlayers !==undefined){
        //var yPos = 130;
        for(var plr in allPlayers){
            index++;
            x += 200;
            y = displayHeight-allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;

            if(index===player.index){
                cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y
            }
           
            //textSize(15);
            //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,yPos);
        }
    }
        if (keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50;
            player.update();
        }
        drawSprites();
        
    }
  
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
}