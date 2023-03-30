import baseCommand from '../../utils/baseCommand.js';

export default class extends baseCommand {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Responde pong!',
        })
    }
    async execute(interaction) {
        interaction.reply({content: 'Pong!', ephemeral: true});
    }
}
