module.exports = function(sequelize, DataTypes){
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        imagenProducto:{
            type: DataTypes.STRING
        },
        nombre:{
            type: DataTypes.STRING
        },
        idUsuario:{
            type: DataTypes.INTEGER
        },
        descripcion:{
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
        },
    }
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }

    let Producto = sequelize.define(alias,cols,config);
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario, {
            as:"usuario",
            foreignKey: "idUsuario"
        })
        Producto.hasMany(models.Comentario, {
            as:"comentarios",
            foreignKey: "idProducto"
        })
        
    }

    return Producto; 
}