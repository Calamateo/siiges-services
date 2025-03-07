const { solicitudBecaAlumno } = require('./properties/solicitudBecaAlumno');
const { alumno } = require('../../alumnos/schema/properties/alumno');
const { grado } = require('../../grupos/schema/properties/grado');
const { estatusAlumnoBeca } = require('./properties/estatusAlumnoBeca');
const { tipoAlumnoBeca } = require('./properties/tipoAlumnoBeca');
const { responseProperties } = require('./properties/responseProperties');

const findOneSolicitudBecaAlumnoSchema = {
  tags: ['Solicitudes Becas Alumno'],
  description: 'Obtiene una solicitud de beca para un alumno específico. Se debe enviar el ID de la solicitud de beca y el ID de la solicitud de beca del alumno en los parámetros de la URL.',
  params: {
    type: 'object',
    properties: {
      solicitudBecaId: { type: 'integer' },
      solicitudBecaAlumnoId: { type: 'integer' },
    },
    required: ['solicitudBecaId', 'solicitudBecaAlumnoId'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            ...solicitudBecaAlumno,
            ...responseProperties,
            alumno: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...alumno,
                ...responseProperties,
              },
            },
            grado: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...grado,
                ...responseProperties,
              },
            },
            estatusAlumnoBeca: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...estatusAlumnoBeca,
                ...responseProperties,
              },
            },
            tipoAlumnoBeca: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                ...tipoAlumnoBeca,
                ...responseProperties,
              },
            },
          },
        },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

module.exports = findOneSolicitudBecaAlumnoSchema;
