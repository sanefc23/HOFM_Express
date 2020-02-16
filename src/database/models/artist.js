module.exports = (sequelize, DataTypes) => {

    let alias = 'artists';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
    };

    let config = {
        tableName: 'artists',
        timestamps: false,
    };

    const artists = sequelize.define(alias, columns, config);

    return artists;
}