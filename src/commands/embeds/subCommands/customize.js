import {  AttachmentBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import removeAccents from 'remove-accents';
import locale from '../../../../locale.js';
import config from '../../../../config.js';

const __dirname = path.resolve();

export default async (client, interaction) => {
    let embedName = interaction.options.getString('name');
    embedName = removeAccents(embedName).toLowerCase().replace(/\s+/g, "");

    if (!fs.existsSync(`${__dirname}/cache/embeds/${embedName}.json`)) return interaction.reply({ content:`${locale[config.locale].commands.embeds.non_existence}`, ephemeral:true});

    const file = fs.readFileSync(`${__dirname}/cache/embeds/${embedName}.json`);
    const attachment = new AttachmentBuilder(file, {name: `${embedName}.json`});

    interaction.reply({content: `${locale[config.locale].commands.embeds.subCommands.customize.success}`,  files: [attachment], ephemeral: true});
}