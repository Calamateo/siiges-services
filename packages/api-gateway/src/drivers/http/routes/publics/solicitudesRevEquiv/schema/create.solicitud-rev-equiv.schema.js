const { domicilio } = require('../../../privates/solicitudes/representantes/schemas/properties/domicilio.properties');
const { persona } = require('../../../privates/usuarios/schema/properties/persona');
const { solicitudRevEquiv } = require('../../../privates/solicitudesRevEquiv/schema/properties/solicitudRevEquiv');
const { responseProperties } = require('../../../privates/solicitudesRevEquiv/schema/properties/responseProperties');

const createEquivalenciaSchema = {
  type: 'object',
  description: 'Create a new equivalencia.',
  body: {
    type: 'object',
    properties: {
      ...solicitudRevEquiv,
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            ...solicitudRevEquiv,
            ...responseProperties,
            interesado: {
              type: 'object',
              properties: {
                persona: {
                  type: 'object',
                  properties: {
                    ...persona,
                    ...responseProperties,
                    domicilio: {
                      ...domicilio,
                      ...responseProperties,
                    },
                  },
                },
                institucionProcedencia: {
                  type: 'object',
                  properties: {
                    tipoInstitucionId: { type: 'integer' },
                    nombre: { type: 'string' },
                    estadoId: { type: 'string' },
                    nombreCarrera: { type: 'string' },
                    ...responseProperties,
                  },
                },
                institucionDestino: {
                  type: 'object',
                  properties: {
                    tipoInstitucionId: { type: 'integer' },
                    programaId: { type: 'integer' },
                    nombre: { type: 'string' },
                    acuerdoRvoe: { type: 'string' },
                    nombreCarrera: { type: 'string' },
                    ...responseProperties,
                  },
                },
              },
            },
            asignaturaAntecedente: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  nombre: { type: 'string' },
                  calificacion: { type: 'string' },
                  ...responseProperties,
                },
              },
            },
            asignaturaEquivalente: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  asignaturaId: { type: 'integer' },
                  nombre: { type: 'string' },
                  calificacion: { type: 'string' },
                  ...responseProperties,
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = createEquivalenciaSchema;
