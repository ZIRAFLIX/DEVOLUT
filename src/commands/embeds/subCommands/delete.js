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

    fs.unlinkSync(`${__dirname}/cache/embeds/${embedName}.json`);
    interaction.reply({content: `${locale[config.locale].commands.embeds.subCommands.delete.success}`, ephemeral: true});
}