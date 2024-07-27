const { solicitudesFoliosAdapter } = require('../../adapters');
const {
  createSolicitudFolioSchema,
  findOneSolicitudFolioSchema,
  findAllSolicitudesFoliosSchema,
  findOneAlumnoSchema,
  udpateSolicitudFolioSchema,
} = require('./schema');

async function trayectoriaRouter(fastify, opts, next) {
  await fastify.get(
    '/',
    { schema: findAllSolicitudesFoliosSchema },
    solicitudesFoliosAdapter.findAllSolicitudesFolios,
  );

  await fastify.get(
    '/:solicitudFolioId',
    { schema: findOneSolicitudFolioSchema },
    solicitudesFoliosAdapter.findOneSolicitudFolio,
  );

  await fastify.get(
    '/solicitudesFoliosAlumnos/:solicitudFolioAlumnoId',
    { schema: findOneAlumnoSchema },
    solicitudesFoliosAdapter.findOneSolicitudFolioAlumno,
  );

  await fastify.post(
    '/',
    { schema: createSolicitudFolioSchema },
    solicitudesFoliosAdapter.createSolicitudFolio,
  );

  await fastify.patch(
    '/:solicitudFolioId',
    { schema: udpateSolicitudFolioSchema },
    solicitudesFoliosAdapter.updateSolicitudFolio,
  );

  next();
}

module.exports = trayectoriaRouter;
