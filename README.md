<img src="https://cdn.discordapp.com/attachments/917183221375049728/1092521276775600259/devolut-banner.png" href="https://discord.gg/kYFy8JwVfd" />

> **A open source [Discord application](https://discord.com/developers/applications) developed for roleplay communities (FiveM Servers) or stores, with essential features.**

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/ZIRAFLIX/DEVOLUT/main) ![GitHub](https://img.shields.io/github/license/ZIRAFLIX/DEVOLUT)

## 🏁 Installation

First, clone the repository and start installing the dependencies:
```sh
$ git clone https://git@github.com:ZIRAFLIX/DEVOLUT.git
$ npm i
```

With the cloned repository and installed dependencies, create the `.env` file in the root of the application and fill in the data below:
```dosini
#DISCORD SETTINGS
TOKEN=""
GUILD_ID=""

#MYSQL SETTINGS
MYSQL_DATABASE=""
MYSQL_USER=""
MYSQL_PASSWORD=""
MYSQL_DIALECT=""
MYSQL_HOST=""
MYSQL_TIMEZONE=""
MYSQL_PORT=""
```
Select the default language for application responses and add optional settings according to desired functionality in the configuration file:
```js
export default {
    locale: 'en_US', // Language used in the application. Available languages: en_US, pt_BR

    activity: { // Activity application configuration
        time: 1, // Time to change activity in minutes
        type: 0, // Available types: GAME: 0, STREAMING: 1, LISTENING: 2, WATCHING: 3, COMPETING: 5
        random: [ // Content to change activity
            // 'Your application status',
        ]
    },
    
    [...]
}
```
Start your application:
```sh
$ npm run dev
```

## 📖 Documentation

Access the **[documentation](https://wiki.ziraflix.gg/)** to learn how to customize your application.

## 📋 To do

- [x] Embed system;
- [ ] Ticket system;
- [ ] E-mail validation system;
- [ ] Products with Getway payments system;
- [ ] Forms system;

## ⭐ Credits

This software uses the following open source packages:

- **[Node.js](https://nodejs.org/)**
- **[Discord.js](https://discord.js.org/)**

## 📜 License

This software is licensed under the **[GNU](https://github.com/ZIRAFLIX/DEVOLUT/blob/master/LICENSE)** © **[ZIRAFLIX](https://github.com/ZIRAFLIX)**.
