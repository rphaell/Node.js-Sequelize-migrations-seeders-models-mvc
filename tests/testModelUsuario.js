// const {sequelize} = require('../models');
// RAW QUERIES



const {Usuario, sequelize} = require('../models');
const Publicacao = require('../models/Publicacao');

Usuario.findByPk(1, {include:'publicacoes'}).then(
    data => {
        console.log(data.toJSON());
        // sequelize.close()
    }
)