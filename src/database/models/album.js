module.exports = (sequelize, DataTypes) => {

    let alias = 'albums';
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artists_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        front_cover: {
            type: DataTypes.STRING,
            allowNull: false
        },
        back_cover: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_date: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'albums',
        timestamps: false,
    };

    const album = sequelize.define(alias, columns, config);

    album.associate = (models) => {
        album.belongsTo(models.artists, {
            as: 'artist',
            foreignKey: 'artists_id'
        });
        album.belongsTo(models.genres, {
            as: 'genre',
            foreignKey: 'genre_id'
        });
    }

    //     // belongsToMany
    //     album.belongsToMany(models.categories, {
    //         as: 'categories',
    //         through: 'category_product',
    //         foreignKey: 'productId',
    //         otherKey: 'categoryId',
    //     });
    // }

    // product.prototype.getRoundPrice = function () {
    //     return Number(this.price).toFixed();
    // }

    return album;
}