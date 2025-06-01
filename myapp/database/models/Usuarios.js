module.exports = function(sequelize, DataTypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        username:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        contrasenia:{
            type: DataTypes.STRING
        },
        fecha:{
            type: DataTypes.DATE
        },
        dni:{
            type:DataTypes.INTEGER
        },
        foto:{
            type: DataTypes.STRING
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }

    let Usuario = sequelize.define(alias,cols,config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
          as: "producto",
          foreignKey: "idUsuario"
        });
        Usuario.hasMany(models.Comentario, {
          as: "comentario",
          foreignKey: "idUsuario"
        });
      }

    return Usuario }

   

