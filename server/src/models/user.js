const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('user',{
        id:{
            type: DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true,
            allowNull : false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        identificationNumber:{
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    })
}