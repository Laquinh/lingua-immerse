const Settings = require ('../models/settings');

class SettingsController
{
    constructor()
    {
        this.settings = new Settings();
    }

    renderSettings(req, res)
    {
        res.render('settingsView', {settings: this.settings});
    }
}

module.exports = SettingsController;