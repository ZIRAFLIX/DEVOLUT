import baseEvent from '../../utils/baseEvent.js';
import discordRegister from '../../database/models/discordRegister.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }
    run = async (message) => {
        const hasData = await discordRegister.findOne({where: {discordId: message.author.id}}).catch((err) => console.log(err));

        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

        if (!hasData){
            await discordRegister.create({discordId: message.author.id}).catch((err) => console.log(err));
            return;
        }
    }
}