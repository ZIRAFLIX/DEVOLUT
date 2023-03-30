import { DataTypes, Model } from 'sequelize';

export default class discordRegister extends Model {
    static init(sequelize) {
        return super.init({
            discordId: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING
            },
            firstname: {
                type: DataTypes.STRING
            },
            mail: {
                type: DataTypes.STRING
            },
            advertence: {
                type: DataTypes.TEXT
            },
            banned: {
                type: DataTypes.BOOLEAN
            }
        }, {
            tableName: 'discord_register',
            sequelize
        })
    }
}