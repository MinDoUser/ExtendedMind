//require("blocks/crafter/fuser"); No.
require("EMSettings");
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
});

