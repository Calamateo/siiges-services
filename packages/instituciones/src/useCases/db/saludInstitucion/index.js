const {
  createSaludInstitucionQuery,
  findOnePlantelQuery,
  findAllSaludInstitucionesQuery,
  findOneSaludInstitucionesQuery,
  deleteSaludInstitucionQuery,
  updateSaludInstitucionQuery,
} = require('../../../adapters/db');

const createSaludInstitucion = require('./create.saludInstitucion.use-cases');
const { findPlantelSaludInstituciones } = require('./find-plantel.salud-institucion.use-cases');
const { findOneSaludInstituciones } = require('./find-one.salud-institucion.use-cases');
const { deleteSaludInstitucion } = require('./delete.salud-institucion.use-cases');
const { updateSaludInstitucion } = require('./update.salud-institucion.use-cases');

module.exports = {
  createSaludInstitucion: createSaludInstitucion(
    createSaludInstitucionQuery,
    findOnePlantelQuery,
  ),
  findPlantelSaludInstituciones: findPlantelSaludInstituciones(
    findAllSaludInstitucionesQuery,
    findOnePlantelQuery,
  ),
  findOneSaludInstituciones: findOneSaludInstituciones(
    findOneSaludInstitucionesQuery,
    findOnePlantelQuery,
  ),
  deleteSaludInstitucion: deleteSaludInstitucion(
    findOnePlantelQuery,
    findOneSaludInstitucionesQuery,
    deleteSaludInstitucionQuery,
  ),
  updateSaludInstitucion: updateSaludInstitucion(
    findOnePlantelQuery,
    findOneSaludInstitucionesQuery,
    updateSaludInstitucionQuery,
  ),
};
