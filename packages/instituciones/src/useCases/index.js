const {
  findAllMunicipios,
} = require('./db/municipios');

const {
  findAllEstados,
} = require('./db/estados');

const {
  findAllPaises,
} = require('./db/paises');

const {
  createPlantel,
  findOnePlantel,
  findOnePlantelDetalles,
  updatePlantel,
  deletePlantel,
  createPlantelHigiene,
  updatePlantelHigiene,
  deletePlantelHigiene,
  findAllHigienes,
  findGroupPlantelHigiene,
  findAllEdificiosNiveles,
  createUpdatePlantelNiveles,
  findGroupPlantelNiveles,
  findAllSeguridad,
  findGroupPlantelSeguridad,
  createUpdatePlantelSeguridad,
  createFormacionDirector,
  findAllFormacionDirector,
  findOneFormacionDirector,
  updateFormacionDirector,
} = require('./db/planteles');

const {
  findAllInstituciones,
  findAllTipoInstituciones,
  createOneInstitucionesDgp,
  findOneInstitucion,
  findOneInstitucionUsuario,
  findPlantelesInstitucion,
  createInstitucion,
  updateInstitucion,
  deleteInstitucion,
  createFormacionRector,
  findAllFormacionRector,
  findOneFormacionRector,
  updateFormacionRector,
} = require('./db/instituciones');

const {
  createRatificacionNombre,
  updateRatificacionNombre,
  findOneRatificacionNombre,
  deleteRatificacionNombre,
} = require('./db/ratificaciones');

const {
  createSaludInstitucion,
  findPlantelSaludInstituciones,
  findOneSaludInstituciones,
  deleteSaludInstitucion,
  updateSaludInstitucion,
} = require('./db/saludInstitucion');

module.exports = {
  findAllInstituciones,
  findAllTipoInstituciones,
  createOneInstitucionesDgp,
  findAllEstados,
  findAllPaises,
  findOneInstitucion,
  findOneInstitucionUsuario,
  findPlantelesInstitucion,
  createInstitucion,
  updateInstitucion,
  deleteInstitucion,
  findAllMunicipios,
  createPlantel,
  findOnePlantel,
  findOnePlantelDetalles,
  updatePlantel,
  deletePlantel,
  createPlantelHigiene,
  findOneRatificacionNombre,
  createRatificacionNombre,
  updateRatificacionNombre,
  deleteRatificacionNombre,
  updatePlantelHigiene,
  deletePlantelHigiene,
  findAllHigienes,
  findGroupPlantelHigiene,
  findAllEdificiosNiveles,
  createUpdatePlantelNiveles,
  findGroupPlantelNiveles,
  createSaludInstitucion,
  findPlantelSaludInstituciones,
  findOneSaludInstituciones,
  deleteSaludInstitucion,
  updateSaludInstitucion,
  findAllSeguridad,
  findGroupPlantelSeguridad,
  createUpdatePlantelSeguridad,
  createFormacionRector,
  findAllFormacionRector,
  findOneFormacionRector,
  updateFormacionRector,
  createFormacionDirector,
  findAllFormacionDirector,
  findOneFormacionDirector,
  updateFormacionDirector,
};
