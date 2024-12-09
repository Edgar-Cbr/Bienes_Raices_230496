import { DataTypes } from 'sequelize';
import db from '../db/config.js';
import bcrypt from 'bcrypt';

const User = db.define('tbb_users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    date: {
        type: DataTypes.DATE, 
        allowNull: false 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    token: {
        type: DataTypes.STRING
    },
    confirmed: {
        type: DataTypes.BOOLEAN
    }
}, {
    hooks: {
        beforeCreate: async function (user) {
            // Generamos la clave para el hash, se recomienda 10 rondas de aleatorización
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});
//Metodos Personalizados 
User.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password, this.password);
    
}
export default User;
