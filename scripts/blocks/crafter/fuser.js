const fuser = extend(GenericCrafter, "tangen-fuser", {
    load(){
        this.super$load()
        this.region = Core.atlas.find(this.name + "-base");
        this.topRegion = Core.atlas.find(this.name + "-top");
        this.itemRegion = Core.atlas.find(this.name + "-item");
    },
  	icons: function(){
	    return [
		    Core.atlas.find(this.name + "-base"),
		    Core.atlas.find(this.name + "-top")
	    ]
    }
})
fuser.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fuser, {
    draw(){
      Draw.rect(fuser.region, this.x, this.y);
      Draw.alpha(Mathf.tan(this.progress, 40, 4 / 3 * 4)*15);
      Draw.rect(fuser.itemRegion, this.x, this.y);
      Draw.alpha(1);
      Lines.circle(this.x, this.y, 2 *Mathf.tan(this.progress, 40, 4 / 3 * 4)*15);
      Draw.rect(fuser.topRegion, this.x, this.y);
    }
})
