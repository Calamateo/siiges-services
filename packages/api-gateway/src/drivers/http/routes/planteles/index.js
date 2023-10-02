const { plantelesAdapter, institucionesAdapter } = require('../../adapters');

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
  findGroupPlantelNivelesSchema,
  createSaludInstitucionSchema,
  findPlantelSaludInstitucionSchema,
  findOneSaludInstitucionSchema,
  deleteSaludInstitucionSchema,
  updateSaludInstitucionSchema,
  findAllSeguridadSistemasSchema,
  findGroupPlantelSeguridadSchema,
  createUpdatePlantelSeguridadSchema,
  createDirectorSchema,
  updateDirectorSchema,
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
    '/:plantelId/higienes',
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
      schema: findGroupPlantelNivelesSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findGroupPlantelNiveles,
  );

  await fastify.post(
    '/institucionesSalud',
    {
      schema: createSaludInstitucionSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.createSaludInstitucion,
  );

  await fastify.get(
    '/:plantelId/institucionesSalud',
    {
      schema: findPlantelSaludInstitucionSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.findPlantelSaludInstituciones,
  );

  await fastify.get(
    '/institucionesSalud/:institucionesSaludId',
    {
      schema: findOneSaludInstitucionSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.findOneSaludInstituciones,
  );

  await fastify.delete(
    '/institucionesSalud/:institucionesSaludId',
    {
      schema: deleteSaludInstitucionSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.deleteSaludInstitucion,
  );

  await fastify.patch(
    '/institucionesSalud/:institucionesSaludId',
    {
      schema: updateSaludInstitucionSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.updateSaludInstitucion,
  );

  // Seguridad Sistemas
  await fastify.get(
    '/seguridad',
    {
      schema: findAllSeguridadSistemasSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findAllSeguridad,
  );

  await fastify.post(
    '/:plantelId/seguridad',
    {
      schema: createUpdatePlantelSeguridadSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.createUpdatePlantelSeguridad,
  );

  await fastify.get(
    '/:plantelId/seguridad',
    {
      schema: findGroupPlantelSeguridadSchema,
      onRequest: [fastify.authenticate],
    },
    plantelesAdapter.findGroupPlantelSeguridad,
  );

  // Directores
  await fastify.post(
    '/:plantelId/director',
    {
      schema: createDirectorSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.createDirectorPlantel,
  );

  await fastify.patch(
    '/:plantelId/director/:directorId',
    {
      schema: updateDirectorSchema,
      onRequest: [fastify.authenticate],
    },
    institucionesAdapter.updateDirectorPlantel,
  );

  next();
}

module.exports = plantelRouter;
