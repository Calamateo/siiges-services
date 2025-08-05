const { infraestructura } = require('./properties/infraestructura');
const { tipoInstalacion } = require('./properties/tipoInstalacion');
const { asignaturaInfraestructura } = require('./properties/asignaturaInfraestructura');
const { asignatura } = require('../../asignaturas/schema/properties/asignatura');
const { responseProperties } = require('./properties/responseProperties');

const findGroupPlantelInfraestructuraSchema = {
  tags: ['Plantel'],
  description: 'Given the ID of infraestructura, then return details of the Infraestructura selected.',
  params: {
    type: 'object',
    properties: {
      plantelId: { type: 'integer' },
    },
    required: ['plantelId'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            ...infraestructura,
            ...responseProperties,
            asignaturasInfraestructura: {
              type: 'array',
              items: {
                properties: {
                  id: { type: 'integer' },
                  ...asignaturaInfraestructura,
                  ...responseProperties,
                  asignatura: {
                    type: 'object',
                    properties: {
                      id: { type: 'integer' },
                      ...asignatura,
                      ...responseProperties,
                    },
                  },
                },
              },
            },
            tipoInstalacion: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...tipoInstalacion,
                ...responseProperties,
              },
            },
          },
        },
      },
    },
  },
};

module.exports = findGroupPlantelInfraestructuraSchema;
