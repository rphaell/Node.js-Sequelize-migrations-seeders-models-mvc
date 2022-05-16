module.exports = (sequelize, DataTypes) => {
      let publicacao = sequelize.define(
        'Publicacao',
        {
          id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          texto: {
            type: DataTypes.TEXT,
          },
          imagem:{
            type: DataTypes.STRING(45)
          },
          usuarios_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model:{
            tableName: "publicacoes"
            },
            key:"id"
            }
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        },
        
        {
            tableName: "publicacoes",

        }
      )

      publicacao.associate = (models) => {
          publicacao.belongsTo(models.Usuario, {foreignKey:'usuarios_id', as: 'autor'})
          publicacao.belongsToMany(model.Usuario,
             {
               through: "curtidas", // nome da tabela de ligação
               foreignKey: "publicacoes_id", //coluna da tabela auxiliar que tem o id da model atual
               otherKey: "usuarios_id", // coluna da table auxliar que tem o id da model que está se relacionando com a atual
               as: "curtidores"
              });
      }

      return publicacao
      
}
    
    
  