import baseEvent from '../../utils/baseEvent.js';
import mysql from '../../database/mysql.js';
import discordRegister from '../../database/models/discordRegister.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }
    run = async () => {
        await mysql.authenticate().then(() => {
            discordRegister.init(mysql);
            discordRegister.sync();
        }).catch((err) => console.log(err));
        this.client.registryCommands();
        console.log(this.client.user.tag + ' - Conexão com o Discord estabelecida com sucesso!');
    }
}