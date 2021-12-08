//require(Nothing);
let health = 0;
function health(){
  let player = Vars.player.unit();
     if(player != null && player.type != null){
	     if(player.health < 1000){
		health = Math.floor(player.health);
		     return "Health: "+health+"/"+player.maxHealth
	     }else if(player.health >= 1000){
		health = Math.round(player.health, 1000);
		let MaxHealth = Math.round(player.maxHealth, 1000);
		return "Health: "+health+"k/"+MaxHealth + "k"
	     };
     }
};

let canAdd = true;

Events.on(ClientLoadEvent, () => {
    Events.on(WorldLoadEvent, () => {
	if(canAdd){
		let m = Vars.mobile;
     let healthUI = Vars.ui.hudGroup.children.get(5).children.get(m ? 2 : 0).children.get(0).children.get(0).children.get(0);
         healthUI.row();
	       healthUI.label(() => health())
	            .visible(true)
	            .touchable(Touchable.disabled)
	            .name("Health")
	            .top().right();
		canAdd = false;
	}
    });
});
