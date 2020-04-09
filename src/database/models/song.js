module.exports = (sequelize, DataTypes) => {

    let alias = 'songs';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        album_id: DataTypes.INTEGER,
    };

    let config = {
        tableName: 'songs',
        timestamps: false,
    };

    const song = sequelize.define(alias, columns, config);

    song.associate = (models) => {
        song.belongsTo(models.albums, {
            as: 'album',
            foreignKey: 'album_id'
        })
    }

    return song;
}