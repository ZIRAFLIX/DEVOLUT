import baseCommand from '../../utils/baseCommand.js';
import config from '../../../config.js';
import locale from '../../../locale.js';

export default class extends baseCommand {
    constructor(client) {
        super(client, {
            name: 'embed', //  Embed system command
            description: 'Embed system.',
            descriptionLocalizations: {
                'pt-BR': 'Sistema de embeds.'
            },
            options: [
                { // Subcommand to download template to create a new embed
                    name: 'template', 
                    description: 'Download template to create a new embed.',
                    nameLocalizations: {
                        'pt-BR': 'template'
                    },
                    descriptionLocalizations: {
                        'pt-BR': 'Baixar template para cria um novo embed.'
                    },
                    type: 1, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                },
                { // Subcommand to send a embed template to system
                    name: 'send', 
                    description: 'Send the customized file embed.',
                    nameLocalizations: {
                        'pt-BR': 'enviar'
                    },
                    descriptionLocalizations: {
                        'pt-BR': 'Envia o arquivo de embed customizado.'
                    },
                    type: 1, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                    options: [
                        { // Name of customized embed
                            name: 'name',
                            description: 'Name of embed.',
                            nameLocalizations: {
                                'pt-BR': 'nome'
                            },
                            descriptionLocalizations: {
                                'pt-BR': 'Nome do embed.'
                            },
                            type: 3, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                            required: true
                        },
                        { // Attachment of customized embed
                            name: 'archive',
                            description: 'Archive of customized embed.',
                            nameLocalizations: {
                                'pt-BR': 'arquivo'
                            },
                            descriptionLocalizations: {
                                'pt-BR': 'Arquivo de embed customizado.'
                            },
                            type: 11, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                            required: true
                        }
                    ]
                },
                {
                    name: 'post',
                    description: 'Send a embed on chat.',
                    nameLocalizations: {
                        'pt-BR': 'postar'
                    },
                    descriptionLocalizations: {
                        'pt-BR': 'Envia um embed no chat.'
                    },
                    type: 1, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                    options: [
                        { // Name of embed to send
                            name: 'name',
                            description: 'Name of embed to send.',
                            nameLocalizations: {
                                'pt-BR': 'nome'
                            },
                            descriptionLocalizations: {
                                'pt-BR': 'Nome do embed a ser enviado.'
                            },
                            type: 3, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                            required: true
                        },
                        { // Channel to send embed
                            name: 'channel',
                            description: 'Channel to send embed.',
                            nameLocalizations: {
                                'pt-BR': 'canal'
                            },
                            descriptionLocalizations: {
                                'pt-BR': 'Canal para enviar o embed.'
                            },
                            type: 7, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                            required: true
                        }
                    ]
                },
                {
                    name: 'customize',
                    description: 'Customize a embed.',
                    nameLocalizations: {
                        'pt-BR': 'customizar'
                    },
                    descriptionLocalizations: {
                        'pt-BR': 'Customiza um embed.'
                    },
                    type: 1, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                    options: [
                        { // Name of embed to customize
                            name: 'name',
                            description: 'Name of embed to customize.',
                            nameLocalizations: {
                                'pt-BR': 'nome'
                            },
                            descriptionLocalizations: {
                                'pt-BR': 'Nome do embed a ser customizado.'
                            },
                            type: 3, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                            required: true
                        }
                    ]
                },
                {
                    name: 'delete',
                    description: 'Delete a embed.',
                    nameLocalizations: {
                        'pt-BR': 'deletar'
                    },
                    descriptionLocalizations: {
                        'pt-BR': 'Deleta um embed.'
                    },
                    type: 1, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                    options: [
                        { // Name of embed to delete
                            name: 'name',
                            description: 'Name of embed to delete.',
                            nameLocalizations: {
                                'pt-BR': 'nome'
                            },
                            descriptionLocalizations: {
                                'pt-BR': 'Nome do embed a ser deletado.'
                            },
                            type: 3, // Available types: https://discord-api-types.dev/api/discord-api-types-v10/enum/ApplicationCommandOptionType
                            required: true
                        }
                    ]
                }
            ]
        })
    }
    async execute(interaction) {
        if(config.development){
            if (!interaction.member.roles.cache.has(config.roles[config.commands_permission.embeds])) return interaction.reply({content: `${locale[config.locale].global.non_permission}`, ephemeral: true});
        }
        
        const subCommands = interaction.options.getSubcommand();
        const load = await import(`./subCommands/${subCommands}.js`);
        await load.default(this.client, interaction);
    }
}
