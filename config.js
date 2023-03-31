// WARNING: The Discord SlashCommands have native support to several languages, so, triggers and descriptions of the commands were made in Portuguese and English directly inside the file of each command.
// ATENÇÃO: Os SlashCommands do Discord possuem suporte nativo a vários idiomas, portanto, acionadores e descrições dos comandos foram feitas em português e inglês diretamente dentro do arquivo de cada comando.
// WARNING: All comments made in the code are in English, because it is the language used for software development, however, the documentation of this repository is also available in Brazilian Portuguese.
// ATENÇÃO: Todos os comentários feitos no código estão em inglês, pois, é o idioma usado para desenvolvimento de software, etretanto a documentação deste repositório também está disponível em português do Brasil.
export default {
    locale: 'en_US', // Language used in the application. Available languages: en_US, pt_BR // Idioma usado na aplicação. Idiomas disponíveis: en_US, pt_BR

    activity: { // Activity application configuration
        time: 1, // Time to change activity in minutes
        type: 0, // Available types: GAME: 0, STREAMING: 1, LISTENING: 2, WATCHING: 3, COMPETING: 5
        random: [ // Content to change activity
            `Conteúdo 1`,
            `Conteúdo 2`,
            `Conteúdo 3`,
            `Conteúdo 4`,
            `Conteúdo 5`
        ]
    },

    roles: {
        administrator: '',
        moderator: ''
    }
}