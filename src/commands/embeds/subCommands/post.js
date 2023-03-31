import {  EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } from 'discord.js';
import fs from 'fs';
import path from 'path';
import removeAccents from 'remove-accents';
import locale from '../../../../locale.js';
import config from '../../../../config.js';

const __dirname = path.resolve();

export default async (client, interaction) => {
    const channel = interaction.options.getChannel('channel');
    let embedName = interaction.options.getString('name');
    embedName = removeAccents(embedName).toLowerCase().replace(/\s+/g, "");
    
    fs.readFile(`${__dirname}/cache/embeds/${embedName}.json`, (err, file) => {
        if (err) throw err;
        const data = JSON.parse(file);
        const embed = new EmbedBuilder();
        const row = new ActionRowBuilder()
        
        data.embed.color ? embed.setColor(data.embed.color) : null;
        data.embed.author && data.embed.author.name && data.embed.author.iconURL ? embed.setAuthor({name: data.embed.author.name, iconURL: data.embed.author.icon_url}) : null;
        data.embed.title ? embed.setTitle(data.embed.title) : null;
        data.embed.description ? embed.setDescription(data.embed.description) : null;
        data.embed.fields ? data.embed.fields.map(f => embed.addFields([{name: f.name, value: f.value, inline: f.inline}])) : null;
        data.embed.thumbnail ? embed.setThumbnail(data.embed.thumbnail) : null;
        data.embed.image ? embed.setImage(data.embed.image) : null;
        data.embed.footer && data.embed.footer.text && data.embed.footer.iconURL ? embed.setFooter({text: data.embed.footer.text, iconURL: data.embed.footer.iconURL}) : null;

        const dataToObj = {
            Success: ButtonStyle.Success,
            Secondary: ButtonStyle.Secondary,
            Danger: ButtonStyle.Danger,
            Link: ButtonStyle.Link
        }

        data.buttons ? data.buttons.map(b => {
            b.link ? row.addComponents(
                new ButtonBuilder()
                .setLabel(b.label)
                .setStyle(dataToObj[b.style])
                .setURL(b.link)
            ) : row.addComponents(
                new ButtonBuilder()
                .setLabel(b.label)
                .setStyle(dataToObj[b.style])
                .setCustomId(b.custom_id)
            );
        }) : null;

        data.menus ? data.menus.map(m => {
            row.addComponents(
                new StringSelectMenuBuilder()
                .setCustomId(m.custom_id)
                .setPlaceholder(m.placeholder)
                .addOptions(m.options)
            );
        }) : null;

        data.buttons.length || data.menus.length ? channel.send({embeds: [embed], components: [row]}) : channel.send({embeds: [embed]});
        interaction.reply({content: `${locale[config.locale].commands.embeds.subCommands.post.success}`, ephemeral:true});
    });
}