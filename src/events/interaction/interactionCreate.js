import baseEvent from '../../utils/baseEvent.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        })
    }
    run = async (interaction) => { // This function is triggered when a interaction is created.
        if (interaction.isCommand() || interaction.isContextMenuCommand()){ // Check if the interaction is a command or a context menu command.
            if (!interaction.guild) return; // Check if the interaction is in a guild and return if it is not.
            const command = this.client.commands.find(c => c.name === interaction.commandName); // Find the command in the client commands.
            await command.execute(interaction); // Execute the command.
        }
    }
}