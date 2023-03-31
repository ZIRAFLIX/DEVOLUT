// WARNING: The Discord SlashCommands have native support to several languages, so, triggers and descriptions of the commands were made in Portuguese and English directly inside the file of each command.
// ATENÇÃO: Os SlashCommands do Discord possuem suporte nativo a vários idiomas, portanto, acionadores e descrições dos comandos foram feitas em português e inglês diretamente dentro do arquivo de cada comando.
// WARNING: All comments made in the code are in English, because it is the language used for software development, however, the documentation of this repository is also available in Brazilian Portuguese.
// ATENÇÃO: Todos os comentários feitos no código estão em inglês, pois, é o idioma usado para desenvolvimento de software, etretanto a documentação deste repositório também está disponível em português do Brasil.
export default {
    en_US: {
        global: {
            non_permission: 'You don\'t have permission to execute this command.'
        },
        commands: {
            embeds: {
                non_existence: 'There is no embed with this name!',
                subCommands: {
                    delete: {
                        success: 'The Embed was deleted successfully!'
                    },
                    customize: {
                        success: 'Download the file, edit it and use the command \`/embed delete\` to delete the old embed and \`/embed send\` to send the new embed.' 
                    },
                    post: {
                        success: `The Embed was sent successfully!`
                    },
                    send: {
                        existence: 'There is already an embed with this name!',
                        success: `The Embed file was sent successfully! Use \`/embed post\` to post the Embed in a channel.\n**Embed preview:**`
                    },
                    template: {
                        download_template: 'Download the file to customize your embed, add the desired information and use the command \`/embed send\` to add to the system.\nAccess the **[documentation](https://google.com)** to learn how to customize your embed.'
                    }
                }
            }
        }
    },
    pt_BR: {
        global: {
            non_permission: 'Você não tem permissão para executar este comando.'
        },
        commands: {
            embeds: {
                non_existence: 'Não existe um embed com esse nome!',
                subCommands: {
                    delete: {
                        success: 'O Embed foi deletado com sucesso!'
                    },
                    customize: {
                        success: 'Baixe o arquivo, edite-o use o comando \`/embed deletar\` para deletar o embed antigo e \`/embed enviar\` para enviar o novo embed.'
                    },
                    post: {
                        success: `O Embed foi enviado com sucesso!`
                    },
                    send: {
                        existence: 'Já existe um embed com esse nome!',
                        success: `O arquivo do Embed foi enviado com sucesso! Use \`/embed post\` para postar o Embed em um canal.\n**Preview do embed:**`
                    },
                    template: {
                        download_template: 'Baixe o arquivo de personalização do seu embed, adicione as informações desejadas e use o comando \`/embed enviar\` para adicionar ao sistema.\nAcesse a **[documentação](https://google.com)** para aprender como personalizar seu embed.'
                    }
                }
            }
        }
    }  
}