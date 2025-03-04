const { solicitudesBecas } = require('../../../adapters/db');

const createSolicitudBeca = require('./create.solicitud-beca.use-cases');
const updateSolicitudBeca = require('./update.solicitud-beca.use-cases');
const findAllSolicitudesBecas = require('./find-all.solicitudes-becas.use-cases');
const findOneSolicitudBeca = require('./find-one.solicitud-beca.use-cases');
const deleteSolicitudBeca = require('./delete.solicitud-beca.use-case');
const createSolicitudBecaAlumno = require('../solicitudesBecasAlumnos/create.solicitud-beca-alumno.use-case');

module.exports = {
  createSolicitudBeca: createSolicitudBeca(
    solicitudesBecas.createSolicitudBecaQuery,
    solicitudesBecas.countSolicitudesBecasQuery,
    solicitudesBecas.findOneSolicitudBecaQuery,
    solicitudesBecas.findAllSolicitudesBecasQuery,
  ),
  findAllSolicitudesBecas: findAllSolicitudesBecas(
    solicitudesBecas.findAllSolicitudesBecasQuery,
  ),
  findOneSolicitudBeca: findOneSolicitudBeca(
    solicitudesBecas.findOneSolicitudBecaQuery,
  ),
  deleteSolicitudBeca: deleteSolicitudBeca(
    solicitudesBecas.findOneSolicitudBecaQuery,
    solicitudesBecas.deleteSolicitudBecasQuery,
  ),
  updateSolicitudBeca: updateSolicitudBeca(
    solicitudesBecas.findOneSolicitudBecaQuery,
    solicitudesBecas.updateSolicitudesBecasQuery,
  ),
  createSolicitudBecaAlumno: createSolicitudBecaAlumno(
    solicitudesBecas.createSolicitudesBecasAlumnoQuery,
    solicitudesBecas.findOneSolicitudesBecasAlumnoQuery,
    solicitudesBecas.findOneSolicitudBecaQuery,
    solicitudesBecas.findOneAlumnoQuery,
    solicitudesBecas.findOneGradoQuery,
  ),
};
