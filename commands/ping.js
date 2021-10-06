module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute(message, args) {
		const manager = require("../utility/safeOperations")
		const { reactOK } = require('../config.json');
		manager.checkedSend(message,'Pong.');
		manager.checkedReact(message, reactOK);
	}
};