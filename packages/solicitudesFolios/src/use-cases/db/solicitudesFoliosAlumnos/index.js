const {
  solicitudesFoliosAlumnos,
  solicitudesFolios,
} = require('../../../adapters/db');

const findOneSolicitudFolioAlumno = require('./find-one.solicitud-folio-alumno.use-cases');
const createSolicitudFolioAlumno = require('./create.solicitud-folio-alumnos.use-cases');
const updateSolicitudFolioAlumno = require('./update.solicitud-folio-alumno.use-cases');
const findAllSolicitudFolioAlumnos = require('./find-all.solicitud-folio-alumnos.use-cases');

module.exports = {
  createSolicitudFolioAlumno: createSolicitudFolioAlumno(
    solicitudesFoliosAlumnos.findOneAlumnoQuery,
    solicitudesFolios.findOneSolicitudFolioQuery,
    solicitudesFoliosAlumnos.createSolicitudFolioAlumnoQuery,
    solicitudesFoliosAlumnos.findOneSolicitudFolioAlumnoQuery,
  ),
  findOneSolicitudFolioAlumno: findOneSolicitudFolioAlumno(
    solicitudesFoliosAlumnos.findOneSolicitudFolioAlumnoQuery,
  ),
  updateSolicitudFolioAlumno: updateSolicitudFolioAlumno(
    solicitudesFoliosAlumnos.updateSolicitudFolioAlumnoQuery,
    solicitudesFoliosAlumnos.findOneSolicitudFolioAlumnoQuery,
  ),
  findAllSolicitudFolioAlumnos: findAllSolicitudFolioAlumnos(
    solicitudesFoliosAlumnos.findAllSolicitudFolioAlumnosQuery,
  ),
};
