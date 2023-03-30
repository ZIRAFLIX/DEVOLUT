import baseEvent from '../../utils/baseEvent.js';
import discordRegister from '../../database/models/discordRegister.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'guildMemberAdd'
        })
    }
    run = async (member) => { // This function is triggered when a member joins a guild.
        const hasData = await discordRegister.findOne({where: {discordId: member.user.id}}).catch((err) => console.log(err)); // Check if the user has a database entry.
        if(!hasData){ // If the user doesn't have a database entry, create one.
            await discordRegister.create({discordId: member.user.id}).catch((err) => console.log(err)); // Create a database entry for the user.
        }
    }
}