const path = require('path');
const csvToJson = require('convert-csv-to-json');

const { ESTATUS_ALUMNO_BECA_TABLE } = require('../models/estatusAlumnoBeca');

const estatusAlumnoBecaCSV = path.join(__dirname, '../CSVFiles/estatus_alumnos_becas.csv');

module.exports = {
  async up(queryInterface) {
    if (queryInterface.context) {
      // eslint-disable-next-line no-param-reassign
      queryInterface = queryInterface.context;
    }
    const estatusAlumnoBecaJson = await csvToJson
      .fieldDelimiter(',')
      .getJsonFromCsv(estatusAlumnoBecaCSV);

    return queryInterface
      .bulkInsert(ESTATUS_ALUMNO_BECA_TABLE, estatusAlumnoBecaJson, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(ESTATUS_ALUMNO_BECA_TABLE, null, {});
  },
};
