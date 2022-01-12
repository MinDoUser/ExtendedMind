require("blocks/crafter/fuser");

var o = 1;

Events.on(ClientLoadEvent, () => {
	
	var dialog = new BaseDialog("ExtendMind | Welcome Screen");

    dialog.buttons.defaults().size(210, 64);
    dialog.buttons.button("@close", run(() => {
        dialog.hide();
    })).size(210, 64);

    dialog.cont.pane((() => {

        var table = new Table();
        table.add("[white]<< Loaded Extended Mind >>", Styles.techLabel).row();
        table.row();
	table.add("This Mod is still in Development! \n It adds some intresting things and other senceless stuff. \n Have Fun!").left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left);
	table.row();
        table.add("[cyan]> By lol02 <", Styles.techLabel).row();
      return table;
    })()).grow().center().maxWidth(620);
    dialog.show();
	
	var infoDialog = new BaseDialog("ExtendMind | Info Screen");

    infoDialog.buttons.defaults().size(210, 64);
    infoDialog.buttons.button("@close", run(() => {
        infoDialog.hide();
    })).size(210, 64);

    infoDialog.cont.pane((() => {

        var it = new Table();
        	it.add("[white]<< Extended Mind Info >>", Styles.techLabel).row();
		it.row();
		it.add("[stat]< General Information >",Styles.techLabel).row();
	    	it.add("This Mod is my first Mod on GitHub. It's still [scarlet]WIP[], so don't worry about unfinished parts.").row();
	    	it.add("This Mod was also created, because I wanted to learn, how to use JS in Mods, so there are may some errors and [scarlet]CRASHES[].").row().row();
	   	it.add("[stat]< Blocks and Items >",Styles.techLabel).row();
	    	it.add("There are some funny and special as well as useful blocks and items. I think you try them yourself.").row();
	    	it.add("[cyan]Thanks for Playing!",Styles.techLabel).row();
      return it;
    })()).grow().center().maxWidth(620);
	
	Vars.ui.custom.buttons.button("Info", Styles.techLabel,()=>{
		Log.info("You opened info-tab "+o+"times.");
		infoDialog.show();
		o++;
	});
});

