const { plantelesAdapter } = require('../../adapters');

const {
  createUpdatePlantelHigieneSchema,
  deletePlantelHigieneSchema,
  findAllHigienesSchema,
  findGroupPlantelHigieneSchema,
  createPlantelInfraestructuraSchema,
  deletePlantelInfraestructuraSchema,
  findGroupPlantelInfraestructuraSchema,
  findGroupPlantelesUsuarioSchema,
  findAllEdificiosNivelesSchema,
  createUpdatePlantelNivelesSchema,
} = require('./schema');

async function plantelRouter(fastify, opts, next) {
  // Higienes
  await fastify.get(
    '/higienes',
    {
      schema: findAllHigienesSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findAllHigienes,
  );

  await fastify.post(
    '/:plantelId/higienes/:higieneId',
    {
      schema: createUpdatePlantelHigieneSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.createPlantelHigiene,
  );

  await fastify.get(
    '/:plantelId/higienes',
    {
      schema: findGroupPlantelHigieneSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findGroupPlantelHigiene,
  );

  await fastify.patch(
    '/:plantelId/higienes/:higieneId',
    {
      schema: createUpdatePlantelHigieneSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.updatePlantelHigiene,
  );

  await fastify.delete(
    '/:plantelId/higienes/:higieneId',
    {
      schema: deletePlantelHigieneSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.deletePlantelHigiene,
  );

  // Infraestructuras
  await fastify.get(
    '/:plantelId/infraestructuras',
    {
      schema: findGroupPlantelInfraestructuraSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findGroupPlantelInfraestructura,
  );

  await fastify.get(
    '/usuarios/:usuarioId',
    {
      schema: findGroupPlantelesUsuarioSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findGroupPlantelesUsuario,
  );

  await fastify.post(
    '/:plantelId/infraestructuras',
    {
      schema: createPlantelInfraestructuraSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.createPlantelInfraestructura,
  );

  await fastify.delete(
    '/:plantelId/infraestructuras/:infraestructuraId',
    {
      schema: deletePlantelInfraestructuraSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.deletePlantelInfraestructura,
  );

  // Edificios niveles
  await fastify.get(
    '/niveles',
    {
      schema: findAllEdificiosNivelesSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findAllEdificiosNiveles,
  );

  await fastify.post(
    '/:plantelId/niveles',
    {
      schema: createUpdatePlantelNivelesSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.createUpdatePlantelNiveles,
  );

  await fastify.get(
    '/:plantelId/niveles',
    {
      schema: findGroupPlantelHigieneSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findGroupPlantelHigiene,
  );

  next();
}

module.exports = plantelRouter;
