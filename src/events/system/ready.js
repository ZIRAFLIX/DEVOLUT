import baseEvent from '../../utils/baseEvent.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }
    run = async () => {
        this.client.registryCommands();
        console.log(this.client.user.tag + ' - Conexão com o Discord estabelecida com sucesso!');
    }
}