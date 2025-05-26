

module.exports = function(sequelize, DataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        
        idUsuario:{
            type: DataTypes.INTEGER
        },
        idProducto:{
            type: DataTypes.INTEGER
        },
        comentario:{
            type:DataTypes.TEXT
        },
        createdAt:{
            type:DataTypes.DATE
        }, 
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }
    let config = {
        tableName: "comentarios",
        timestamps: true,
    }

    let Comentario = sequelize.define(alias,cols,config);
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario, {
            as:"usuario",
            foreignKey: "idUsuario"
        })
        Comentario.belongsTo(models.Producto, {
            as:"producto",
            foreignKey: "idProducto"
        })
    }
    return Comentario }