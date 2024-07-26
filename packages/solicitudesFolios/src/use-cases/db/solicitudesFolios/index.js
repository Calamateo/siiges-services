// adapters/solicitudFolios/index.js
const {
  solicitudesFolios,
} = require('../../../adapters/db');

const createSolicitudFolio = require('./create.solicitud-folio.use-cases');
const findOneSolicitudFolio = require('./find-one.solicitud-programa.use-cases');
const findAllSolicitudesFolios = require('./find-all.solicitudes-folios.use-cases');
const createAlumnoFolio = require('./create.solicitud-folio-alumnos.use-cases');
const findOneSolicitudFolioAlumno = require('./find-one.solicitud-folio-alumnos.use-cases');
const findOneSolicitudesFolioAlumno = require('./find-one.solicitudes-folios-alumno.use-cases');

module.exports = {
  createSolicitudFolio: createSolicitudFolio(
    solicitudesFolios.createSolicitudFolioQuery,
    solicitudesFolios.countSolicitudesFoliosQuery,
  ),
  findAllSolicitudesFolios: findAllSolicitudesFolios(
    solicitudesFolios.findAllSolicitudesFoliosQuery,
  ),
  findOneSolicitudFolio: findOneSolicitudFolio(
    solicitudesFolios.findOneSolicitudFolioQuery,
  ),
  createAlumnoFolio: createAlumnoFolio(
    solicitudesFolios.createAlumnoFolioQuery,
  ),
  findOneSolicitudFolioAlumno: findOneSolicitudesFolioAlumno(
    solicitudesFolios.findOneSolicitudFolioAlumnoQuery,
  ),
  findOneAlumno: findOneSolicitudFolioAlumno(
    solicitudesFolios.findOneSolicitudFolioAlumnoQuery,
  ),
};
