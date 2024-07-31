// External dependencies
const { models, queries } = require('@siiges-services/core');

const {
  SolicitudFolioAlumno,
  Alumno,
} = models;

const {
  createQuery,
  findOneQuery,
  updateAndFindQuery,
  findAllQuery,
} = queries;

module.exports = {
  updateSolicitudFolioAlumnoQuery: updateAndFindQuery(SolicitudFolioAlumno),
  createSolicitudFolioAlumnoQuery: createQuery(SolicitudFolioAlumno),
  findOneSolicitudFolioAlumnoQuery: findOneQuery(SolicitudFolioAlumno),
  findOneAlumnoQuery: findOneQuery(Alumno),
  findAllSolicitudFolioAlumnosQuery: findAllQuery(SolicitudFolioAlumno),
};
