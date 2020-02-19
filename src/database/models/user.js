module.exports = (sequelize, DataTypes) => {

    let alias = 'users';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        birthdate: DataTypes.INTEGER,
        adress: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    };

    let config = {
        tableName: 'users',
        timestamps: false,
    };

    const user = sequelize.define(alias, columns, config);

    return user;
}