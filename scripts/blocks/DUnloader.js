const range = 150;

const DU = extendContent(Unloader, "DUnloader", {
    drawPlace(x, y, rotation, valid){
        Drawf.dashCircle(x * Vars.tilesize + this.offset, y * Vars.tilesize + this.offset, range, Pal.accent);
    },
    outputsItems(){
        return true;
    },
    setStats(){
       this.super$setStats();
       this.stats.remove(Stat.speed);
       this.stats.add(Stat.range, range / Vars.tilesize, StatUnit.blocks);
    },
});
DU.buildType = prov(() => {
    return new JavaAdapter(Unloader.UnloaderBuild, {
        updateTile(){
            Vars.indexer.eachBlock(this, range, boolf(other => other.unloadable), cons(other => {
                if(this.power.status > 0.999 && this.sortItem != null && this.acceptItem(this, this.sortItem) > 0 && other.items.get(this.sortItem) > 0){
                    this.handleItem(this, this.sortItem);
                    Fx.itemTransfer.at(other.x, other.y, 2, this.sortItem.color, this);
                    other.items.remove(this.sortItem, 1);
                }
            }));
        },
        acceptItem(source, item){
            return false;
        },
        drawConfigure(){
            this.super$drawConfigure();
            Vars.indexer.eachBlock(this, range, boolf(other => other.unloadable), cons(other => {
                if(this.sortItem != null && otheritems.get(this.sortItem) > 0) Drawf.square(other.x, other.y, other.block.size * Vars.tilesize / 2 + 1, this.sortItem.color);
            }));
            Drawf.dashCircle(this.x, this.y, range, Pal.accent);
        },
        status(){
            return this.power.status > 0.999 ? BlockStatus.active : BlockStatus.noInput;
        },
    }, DU);
});
