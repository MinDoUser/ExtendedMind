const launch = function(x,y,color){
  var firefrag = extend(BasicBulletType,{});
  firefrag.speed = 4;
  firefrag.damage = 0;
  firefrag.splashDamage = 0;
  firefrag.collidesTiles = false;
  firefrag.reflectable = false;
  firefrag.hittable = false;
  firefrag.absorbable = false;
  firefrag.collides = false;
  firefrag.collidesTeam = false;
  firefrag.smokeEffect = firefrag.shootEffect = firefrag.despawnEffect = Fx.none;
  firefrag.frontColor = color;
  var firebullet = extend(BasicBulletType,{});
  firebullet.speed = 4;
  firebullet.damage = 0;
  firebullet.splashDamage = 0;
  firebullet.collidesTiles = false;
  firebullet.reflectable = false;
  firebullet.hittable = false;
  firebullet.absorbable = false;
  firebullet.collides = false;
  firebullet.collidesTeam = false;
  firebullet.smokeEffect = firebullet.shootEffect = firebullet.despawnEffect = Fx.none;
  firebullet.fragBullets = Math.random()*15+1;
  firebullet.fragBullet = firefrag;
  
  firebullet.create(team.derelict, x, y, 90, 1 ,1);
};
const firework= extendContent(Unloader, "firework", {
    outputsItems(){
        return false;
    },
    setStats(){
       this.super$setStats();
       this.stats.remove(Stat.speed);
    },
});
firework.buildType = prov(() => {
    return new JavaAdapter(Unloader.UnloaderBuild, {
        updateTile(){
                if( this.sortItem != null && this.items.get(this.sortItem) > 0){
                    launch(this.x, this.y, this.sortItem.color);
                    this.items.clear();
                }
        },
        acceptItem(source, item){
            return item == this.sortItem && this.items.get(item) < 1;
        },
        status(){
            return this.items.get(this.sortItem) > 0  ? BlockStatus.active : BlockStatus.noInput;
        },
    }, firework);
});
