const solicitudesSchema = require('./schema');
const { solicitudesRevEquiv } = require('../../../adapters');

async function solicitudesRevEquivRouter(fastify, opts, next) {
  await fastify.patch(
    '/:solicitudRevEquivId',
    {
      schema: solicitudesSchema.updateSolicitudRevEquivSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesRevEquiv.updateSolicitudRevEquiv,
  );

  await fastify.get(
    '/',
    {
      schema: solicitudesSchema.findAllSolicitudesRevEquivSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesRevEquiv.findAllSolicitudesRevEquiv,
  );

  await fastify.get(
    '/:solicitudRevEquivId',
    {
      schema: solicitudesSchema.findOneSolicitudRevEquivSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesRevEquiv.findOneSolicitudRevEquiv,
  );

  await fastify.delete(
    '/:solicitudRevEquivId',
    {
      schema: solicitudesSchema.deleteSolicitudRevEquivSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesRevEquiv.deleteSolicitudRevEquiv,
  );

  await fastify.post(
    '/asignaturaAntecedenteEquivalente',
    {
      schema: solicitudesSchema.createAsignaturaAntecedenteEquivalenteSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesRevEquiv.createAsignaturaAntecedenteEquivalente,
  );

  await fastify.get(
    '/asignaturaAntecedenteEquivalente/:asignaturaAntecedenteEquivalenteId',
    {
      schema: solicitudesSchema.findOneAsignaturaAntecedenteEquivalenteSchema,
      onRequest: [fastify.authenticate],
    },
    solicitudesRevEquiv.findOneAsignaturaAntecedenteEquivalente,
  );

  next();
}

module.exports = solicitudesRevEquivRouter;
