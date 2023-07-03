// External dependencies
const { models, queries } = require('@siiges-services/core');

const {
  Solicitud,
  Nivel,
  Usuario,
  ProgramaTurno,
  Programa,
  SolicitudSeccion,
} = models;

const {
  findAllQuery,
  findOneQuery,
  createQuery,
  updateAndFindQuery,
  countQuery,
  deleteQuery,
} = queries;

module.exports = {
  createSolicitudProgramaQuery: createQuery(Solicitud),
  updateAndFindSolicitudQuery: updateAndFindQuery(Solicitud),
  findOneSolicitudQuery: findOneQuery(Solicitud),
  findOneNivelQuery: findOneQuery(Nivel),
  findOneUsuarioQuery: findOneQuery(Usuario),
  countSolicitudesQuery: countQuery(Solicitud),
  findAllSolicitudesProgramasQuery: findAllQuery(Solicitud),
  findOneSolicitudProgramaQuery: findOneQuery(Solicitud),
  findAllSolicitudesUsuarioQuery: findAllQuery(Solicitud),
  updateSolicitudQuery: updateAndFindQuery(Solicitud),
  findOneProgramaQuery: findOneQuery(Programa),
  updateProgramaQuery: updateAndFindQuery(Programa),
  createProgramaTurnoQuery: createQuery(ProgramaTurno),
  findOneProgramaTurnoQuery: findOneQuery(ProgramaTurno),
  deleteProgramaTurnoQuery: deleteQuery(ProgramaTurno),
  findOneSolicitudSeccionQuery: findOneQuery(SolicitudSeccion),
  createSolicitudSeccionQuery: createQuery(SolicitudSeccion),
  updateSolicitudSeccionQuery: updateAndFindQuery(SolicitudSeccion),
};
