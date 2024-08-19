const { solicitudesFoliosAdapter } = require('../../adapters');
const solicitudSchemas = require('./schema');

async function trayectoriaRouter(fastify, opts, next) {
  // Solicitud Folios

  await fastify.get(
    '/',
    {
      schema: solicitudSchemas.findAllSolicitudesFoliosSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.findAllSolicitudesFolios,
  );

  await fastify.get(
    '/:solicitudFolioId',
    {
      schema: solicitudSchemas.findOneSolicitudFolioSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.findOneSolicitudFolio,
  );

  await fastify.post(
    '/',
    {
      schema: solicitudSchemas.createSolicitudFolioSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.createSolicitudFolio,
  );

  await fastify.patch(
    '/:solicitudFolioId',
    {
      schema: solicitudSchemas.udpateSolicitudFolioSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.updateSolicitudFolio,
  );

  // Solicitud Folio Alumno
  await fastify.get(
    '/solicitudesFoliosAlumnos/:solicitudFolioAlumnoId',
    {
      schema: solicitudSchemas.findOneSolicitudFolioAlumnoSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.findOneSolicitudFolioAlumno,
  );

  await fastify.post(
    '/:solicitudFolioId/alumnos/:alumnoId',
    {
      schema: solicitudSchemas.createSolicitudFolioAlumnoSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.createSolicitudFolioAlumno,
  );

  await fastify.patch(
    '/solicitudesFoliosAlumnos/:solicitudFolioAlumnoId',
    {
      schema: solicitudSchemas.updateSolicitudFolioAlumnoSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.updateSolicitudFolioAlumno,
  );

  await fastify.get(
    '/:solicitudFolioId/alumnos',
    {
      schema: solicitudSchemas.findAllSolicitudFolioAlumnoSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.findAllSolicitudFolioAlumnos,
  );

  await fastify.delete(
    '/solicitudesFoliosAlumnos/:solicitudFolioAlumnoId',
    {
      schema: solicitudSchemas.deleteSolicitudFolioAlumnoSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.deleteSolicitudFolioAlumno,
  );

  await fastify.patch(
    '/:solicitudFolioId/asignacionFolios',
    {
      // schema: solicitudSchemas.udpateSolicitudFolioSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesFoliosAdapter.asignacionFolioAlumno,
  );

  next();
}

module.exports = trayectoriaRouter;
