import {  AttachmentBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import locale from '../../../../locale.js';
import config from '../../../../config.js';

const __dirname = path.resolve();

export default async (client, interaction) => {
    const file = fs.readFileSync(`${__dirname}/assets/embeds/template.json`);
    const attachment = new AttachmentBuilder(file, {name: `template.json`});
    interaction.reply({content: `${locale[config.locale].commands.embeds.subCommands.template.download_template}`,  files: [attachment], ephemeral: true});
}