const { Sequelize } = require('sequelize');
const UserModel = require("./models/user")



const sequelize = new Sequelize(
    `postgres://${"postgres"}:${"Juancami172001"}@${"localhost"}/practica`,
    {
       logging: false, // set to console.log to see the raw SQL queries
       native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
 );

UserModel(sequelize);

const {user} =  sequelize.models;



module.exports = {
    ...sequelize.models,
    user,
    conn: sequelize
}