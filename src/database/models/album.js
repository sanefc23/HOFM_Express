module.exports = (sequelize, DataTypes) => {

    let alias = 'albums';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        artists_id: DataTypes.INTEGER,
        description: DataTypes.STRING,
        front_cover: DataTypes.STRING,
        back_cover: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        release_date: DataTypes.INTEGER,
        genre_id: DataTypes.INTEGER,
    };

    let config = {
        tableName: 'albums',
        timestamps: false,
    };

    const album = sequelize.define(alias, columns, config);

    return album;
}