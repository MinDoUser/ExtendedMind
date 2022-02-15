const SettingDialog = new BaseDialog("Extended Mind | Settings");
    SettingDialog.buttons.defaults().size(210, 64);
    SettingDialog.buttons.button("@close", run(() => {
        SettingDialog.hide();
    })).size(210, 64);
SettingDialog.cont.pane((() => {

        var table = new Table();
        table.add("[white]<< Settings >>", Styles.techLabel).row();
        table.row();
        for(x=0;0<5;x++){
	      table.checkPref("@placeholder"+x, true);
          //Doesn't do anything
        }
      return table;
    })()).grow().center().maxWidth(620);
Events.on(ClientLoadEvent, () => {
    const settings = Vars.ui.settings;
    settings.game.row();
    settings.game.button("ExtendedMind Settings"), Styles.cleart, () => {
                SettingDialog.show();
            });
});
