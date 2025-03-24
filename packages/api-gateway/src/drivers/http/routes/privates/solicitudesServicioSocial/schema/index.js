const createSolicitudServSocSchema = require('./create.solicitud-serv-soc.schema');
const findOneSolicitudServSocSchema = require('./find-one.solicitud-servicio-social.schema');
const findAllSolicitudesServSocSchema = require('./find-all.solicitudes-servicio-social.schema');
const updateSolicitudServSocSchema = require('./update.solicitud-serv-soc.schema');
const createSolicitudServSocAlumnoSchema = require('./create.solicitud-serv-soc-alumno.schema');
const updateSolicitudServSocAlumnoSchema = require('./update.solicitud-serv-soc-alumno.schema');
const findOneSolicitudServSocAlumnoSchema = require('./find-one.solicitud-serv-soc-alumno.schema');
const findAllSolicitudesServSocAlumnosSchema = require('./find-all.solicitudes-serv-soc-alumnos.schema');
const deleteSolicitudServSocSchema = require('./delete.solicitud-serv-soc.schema');
const deleteSolicitudServSocAlumnoSchema = require('./delete.solicitud-serv-soc-alumno.schema');
const findAllDimensionesServSocSchema = require('./find-all.dimensiones.schema');
const findAllEjesSchema = require('./find-all.ejes-serv-soc.schema');

module.exports = {
  createSolicitudServSocSchema,
  findOneSolicitudServSocSchema,
  findAllSolicitudesServSocSchema,
  updateSolicitudServSocSchema,
  createSolicitudServSocAlumnoSchema,
  updateSolicitudServSocAlumnoSchema,
  findOneSolicitudServSocAlumnoSchema,
  findAllSolicitudesServSocAlumnosSchema,
  deleteSolicitudServSocSchema,
  deleteSolicitudServSocAlumnoSchema,
  findAllDimensionesServSocSchema,
  findAllEjesSchema,
};
