require("blocks/firework");

const lib = require("lib");
let health = 0;
let maxHealth = 0;
function healthFunction(){
  let player = Vars.player.unit();
     if(player != null && player.type != null){
	     health = lib.getRound(player.health);
	     maxHealth = lib.getRound(player.maxHealth);
	     return "Health: " health + "/" + maxHealth;
     }
};

let canAdd = true;

Events.on(ClientLoadEvent, () => {
    Events.on(WorldLoadEvent, () => {
	if(canAdd){
		let m = Vars.mobile;
     let healthUI = Vars.ui.hudGroup.children.get(5).children.get(m ? 2 : 0).children.get(0).children.get(0).children.get(0);
         healthUI.row();
	       healthUI.label(() => healthFunction())
	            .visible(true)
	            .touchable(Touchable.disabled)
	            .name("Health")
	            .top().right();
		canAdd = false;
	}
    });
});
