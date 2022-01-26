class Player {
    constructor(){
     
       this.name=null;
       this.distance=0;
       this.index=null;

    }

    //obtener el playerCount
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    //actualizar  el playerCount
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({ //.set() se usa para establecer el valor en la base de datos.
        name:this.name,
        distance:this.distance
      });
     
   
   
    }
    static getPlayerInfo(){

  var playerInfoRef= database.ref('players')

  playerInfoRef.on("value",(data)=>{
  
    allPlayers=data.val();

  })

    }
  }

    