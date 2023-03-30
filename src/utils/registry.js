import { Client } from 'discord.js';
import { readdirSync } from 'fs';
import * as dotenv from 'dotenv';

dotenv.config();

class registry extends Client {
    constructor(options) {
        super(options);
        this.commands = [];
        this.loadCommands();
        this.loadEvents();
    }

    registryCommands() {
        this.guilds.cache.get(process.env.GUILD_ID).commands.set(this.commands);
    }

    loadCommands() {
        const directories = readdirSync(process.cwd() + '/src/commands/');
        directories.forEach(async (category) => {
            const commands = readdirSync(process.cwd() + '/src/commands/' + category + '/');
            commands.filter((command) => command.split('.').pop() === 'js').forEach(async (command) => {
                const load = await import(`../commands/${category}/${command}`);
                const cmd = await new load.default(this);
                this.commands.push(cmd);
            });
        });
    }

    loadEvents() {
        const directories = readdirSync(process.cwd() + '/src/events/');
        directories.forEach(async (category) => {
            const events = readdirSync(process.cwd() + '/src/events/' + category + '/');
            events.filter((event) => event.split('.').pop() === 'js').forEach(async (event) => {
                const load = await import(`../events/${category}/${event}`);
                const evt = await new load.default(this);
                this.on(evt.name, evt.run);
            });
        });
    }
}

export default registry