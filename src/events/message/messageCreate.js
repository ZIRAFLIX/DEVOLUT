import baseEvent from '../../utils/baseEvent.js';
import discordRegister from '../../database/models/discordRegister.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }
    run = async (message) => { // This function is triggered when a message is created.
        const hasData = await discordRegister.findOne({where: {discordId: message.author.id}}).catch((err) => console.log(err)); // Check if the user has a database entry.

        if(message.author.bot) return; // Check if the message was sent by a bot and return if it was.
        if(message.channel.type === 'dm') return; // Check if the message was sent in a DM and return if it was.

        if (!hasData){ // If the user doesn't have a database entry, create one.
            await discordRegister.create({discordId: message.author.id}).catch((err) => console.log(err)); // Create a database entry for the user.
            return;
        }
    }
}