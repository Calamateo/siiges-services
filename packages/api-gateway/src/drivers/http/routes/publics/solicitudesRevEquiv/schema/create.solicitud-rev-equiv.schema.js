const { domicilio } = require('../../../privates/solicitudes/representantes/schemas/properties/domicilio.properties');
const { persona } = require('../../../privates/usuarios/schema/properties/persona');
const { solicitudRevEquiv } = require('../../../privates/solicitudesRevEquiv/schema/properties/solicitudRevEquiv');
const { responseProperties } = require('../../../privates/solicitudesRevEquiv/schema/properties/responseProperties');
const { interesado } = require('../../../privates/solicitudesRevEquiv/schema/properties/interesado');
const { institucionProcedencia } = require('../../../privates/solicitudesRevEquiv/schema/properties/institucionProcedencia');
const { institucionDestino } = require('../../../privates/solicitudesRevEquiv/schema/properties/institucionDestino');
const { asignaturaAntecedenteEquivalente } = require('../../../privates/solicitudesRevEquiv/schema/properties/asignaturaAntecedenteEquivalente');

const createEquivalenciaSchema = {
  type: 'object',
  description: 'Create a new equivalencia.',
  body: {
    type: 'object',
    properties: {
      ...solicitudRevEquiv,
      interesado: {
        type: 'object',
        properties: {
          ...interesado,
          persona: {
            type: 'object',
            properties: {
              ...persona,
              domicilio: {
                type: 'object',
                properties: {
                  ...domicilio,
                },
                required: [
                  'municipioId',
                  'estadoId',
                  'calle',
                  'numeroExterior',
                  'colonia',
                  'codigoPostal',
                ],
              },
            },
            required: [
              'nombre',
              'apellidoPaterno',
              'sexo',
              'nacionalidad',
              'telefono',
              'celular',
              'curp',
              'correoPrimario',
              'domicilio',
            ],
          },
          institucionProcedencia: {
            type: 'object',
            properties: {
              ...institucionProcedencia,
              ...responseProperties,
            },
            required: [
              'tipoInstitucionId',
              'estadoId',
              'nombre',
              'nombreCarrera',
            ],
          },
          institucionDestino: {
            type: 'object',
            properties: {
              ...institucionDestino,
              ...responseProperties,
            },
            required: ['tipoInstitucionId', 'nombre'],
            if: {
              properties: { programaId: { type: 'integer' } },
              required: ['programaId'],
            },
            then: {
              required: ['tipoInstitucionId', 'nombre'],
            },
            else: {
              required: ['tipoInstitucionId', 'nombreCarrera', 'acuerdoRvoe', 'nombre'],
            },
          },
          asignaturasAntecedentesEquivalentes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                ...asignaturaAntecedenteEquivalente,
                ...responseProperties,
              },
              required: [
                'asignaturaId',
                'nombreCalificacionEquivalente',
                'calificacionEquivalente',
                'nombreCalificacionAntecedente',
                'calificacionAntecedente',
              ],
            },
            minItems: 1,
          },
        },
        required: ['persona', 'institucionProcedencia', 'institucionDestino'],
        if: {
          properties: {
            asignaturasAntecedentesEquivalentes: {
              type: 'array',
            },
          },
        },
        then: {
          required: ['asignaturasAntecedentesEquivalentes'],
        },
      },
    },
    required: [
      'tipoTramiteId',
      'estatusSolicitudRevEquivId',
      'interesado',
    ],
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
                      type: 'object',
                      properties: {
                        ...domicilio,
                        ...responseProperties,
                      },
                    },
                  },
                },
                institucionProcedencia: {
                  type: 'object',
                  properties: {
                    ...institucionProcedencia,
                    ...responseProperties,
                  },
                },
                institucionDestino: {
                  type: 'object',
                  properties: {
                    ...institucionDestino,
                    ...responseProperties,
                  },
                },
                asignaturasAntecedentesEquivalentes: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      ...asignaturaAntecedenteEquivalente,
                      ...responseProperties,
                    },
                  },
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
