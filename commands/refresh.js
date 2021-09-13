module.exports = {
	name: 'refresh',
    description: 'refresh gl',
    cooldown: 5,
	execute(message, args) {
		const refreshList = require("../utility/refreshList");
        refreshList.refresh();
	}
};