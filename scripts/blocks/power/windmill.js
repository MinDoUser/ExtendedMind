const range = 8;
const windmill = extend(PowerGenerator, "windmill", {
      load(){
        this.super$load()
        this.baseRegion = Core.atlas.find("extended-mind-windmill")
        this.rotorRegion = Core.atlas.find("extended-mind-windmill-rotor")
        this.outlineRegion = Core.atlas.find("extended-mind-windmill-rotor-outline")
    },
    setBars(){
        this.super$setBars()
        this.bars.remove("power")
        this.bars.add("eff", entity => new Bar(
            () => "Efficiency",
            () => Color.valueOf("ffb04a"),
            () => entity.productionEfficiency
        ));
    },
      drawPlace(x, y, rotation, valid){
        this.super$drawPlace(x, y, rotation, valid)
        Drawf.select(x * range, y * range, (4 + this.size) * 4, Pal.accent)
    }
});
windmill.buildType = () => extend(PowerGenerator.GeneratorBuild, windmill, {
    reloadE: 0.0,
    counter: 1,
    eff: 0.0,
    displayEff: 0.1,
   update(){
        this.super$update()
        for(var i = 0; i < 56; i += 8){
            for(var j = 0; j < 56; j += 8){
                if(!Vars.world.tileWorld(this.x + i - 24, this.y + j - 24).solid()){this.counter -= 1/40.0}
            }
        }
     this.eff = 1/this.counter;
     this.counter = 0;
       if(this.productionEfficiency > 0){
         this.productionEfficiency = this.eff
       }else{this.productionEfficiency = 0};
    },
    draw(){
        this.super$draw()
      Draw.rect("extended-mind-windmill", this.x, this.y);
      Draw.rect(
			  "extended-mind-windmill-rotor",
			  this.x + Angles.trnsx(this.rotation - 90, 0, 0),
			  this.y + Angles.trnsy(this.rotation - 90, 0, 0),
			  Time.time * -7/this.eff);
		  Draw.rect(
			  "extended-mind-windmill-rotor-outline",
		  	this.x + Angles.trnsx(this.rotation - 90, 0, 0),
			  this.y + Angles.trnsy(this.rotation - 90, 0, 0),
			  Time.time * -7/this.eff);
    },
    status(){
        if(this.eff >= 0.2){return BlockStatus.active}else{if(this.eff > 0){return BlockStatus.noOutput}}
        return BlockStatus.noInput
    },
    drawSelect(){
        this.super$drawSelect()
        Drawf.select(this.x, this.y, (4 + this.size) * 4, Pal.accent)
    }
});
