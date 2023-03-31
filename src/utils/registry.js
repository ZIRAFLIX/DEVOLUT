import { Client } from 'discord.js';
import { readdirSync } from 'fs';

class registry extends Client {
    constructor(options) {
        super(options); // Create a new client.
        this.commands = []; // Create a commands array.
        this.loadCommands();  // Load the commands.
        this.loadEvents(); // Load the events.
    }

    registryCommands() { // Register the commands in the guild.
        this.guilds.cache.get(process.env.GUILD_ID).commands.set(this.commands); 
    }

    loadCommands() { 
        const directories = readdirSync(process.cwd() + '/src/commands/'); 
        directories.forEach(async (category) => {
            const commands = readdirSync(process.cwd() + '/src/commands/' + category + '/'); // Read the commands directory.
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
            const events = readdirSync(process.cwd() + '/src/events/' + category + '/'); // Read the events directory.
            events.filter((event) => event.split('.').pop() === 'js').forEach(async (event) => {
                const load = await import(`../events/${category}/${event}`);
                const evt = await new load.default(this);
                this.on(evt.name, evt.run); 
            });
        });
    }
}

export default registry