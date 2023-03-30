import baseEvent from '../../utils/baseEvent.js';
import mysql from '../../database/mysql.js';
import discordRegister from '../../database/models/discordRegister.js';
import config from '../../../config.js';

export default class extends baseEvent {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }
    run = async () => {
        await mysql.authenticate().then(() => { // Connect to database
            discordRegister.init(mysql); // Initialize model of database
            discordRegister.sync(); // Sync model with database
        }).catch((err) => console.log(err)); 

        this.client.registryCommands(); // Register commands of the application
        console.log(this.client.user.tag + ' - Conexão com o Discord estabelecida com sucesso!'); // Log to console when the bot is ready

        setInterval(() => { // Change activity every time defined in config.js
            this.client.user.setActivity(`${config.activity.random[Math.floor(Math.random() * config.activity.random.length)]}`, {type: config.activity.type}); // Set activity with data from config.js
        }, 1000 * 60 * config.activity.time);
    }
}