import discord from 'discord.js';
const { GatewayIntentBits } = discord;
import Client from './src/utils/registry.js';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
]});

(async () => {
    await client.login(process.env.TOKEN);
})();

export default client