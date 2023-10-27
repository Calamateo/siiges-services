const { alumno } = require('./properties/alumno');
const { persona } = require('../../usuarios/schema/properties/persona');
const { situacion } = require('./properties/situacion');
const { responseProperties } = require('./properties/responseProperties');

const findProgramaAlumnosSchema = {
  tags: ['Alumnos'],
  description: 'Return an array of Alumnos grouped by programa.',
  params: {
    title: 'findProgramaAlumnosSchema',
    type: 'object',
    properties: {
      programaId: { type: 'integer' },
    },
    required: ['programaId'],
  },
  querystring: {
    type: 'object',
    properties: {
      matricula: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          if: {
            type: 'array',
          },
          then: {
            type: 'array',
            items: {
              properties: {
                id: { type: 'integer' },
                ...alumno,
                ...responseProperties,
                persona: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    ...persona,
                    ...responseProperties,
                  },
                },
                situacion: {
                  type: 'object',
                  properties: {
                    id: { type: 'integer' },
                    ...situacion,
                    ...responseProperties,
                  },
                },
              },
            },
          },
          else: {
            type: 'object',
            properties: {
              id: { type: 'integer' },
              ...alumno,
              ...responseProperties,
              persona: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  ...persona,
                  ...responseProperties,
                },
              },
              situacion: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  ...situacion,
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

module.exports = findProgramaAlumnosSchema;
