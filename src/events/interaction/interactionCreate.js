import baseEvent from '../../utils/baseEvent.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        })
    }
    run = async (interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()){
            if (!interaction.guild) return;
            const command = this.client.commands.find(c => c.name === interaction.commandName);
            await command.execute(interaction);
        }
    }
}