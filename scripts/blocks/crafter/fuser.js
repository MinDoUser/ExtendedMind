const fuser = extend(GenericCrafter, "tangen-fuser", {
    load(){
        this.super$load()
        this.region = Core.atlas.find(this.name + "-bottom");
        this.topRegion = Core.atlas.find(this.name + "-top");
        this.itemRegion = Core.atlas.find(this.name + "-item");
    },
  	icons: function(){
	    return [
		    Core.atlas.find(this.name + "-bottom"),
		    Core.atlas.find(this.name + "-top")
	    ]
    }
})
fuser.buildType = () => extend(GenericCrafter.GenericCrafterBuild, fuser, {
    draw(){
      Draw.rect(this.region, this.x, this.y);
      Draw.alpha(Mathf.tan(this.progress, 40, 4 / 3 * 4));
      Draw.rect(this.itemRegion, this.x, this.y);
      Draw.alpha(1);
      Lines.circle(x, y, 2 *Mathf.tan(this.progress, 40, 4 / 3 * 4)*5);
      Draw.rect(this.topRegion, this.x, this.y);
    }
})
