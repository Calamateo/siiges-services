const boom = require('@hapi/boom');
const { checkers } = require('@siiges-services/shared');

const createAlumnoValidacion = (
  findOneSituacionesValidacionQuery,
  findOneTipoValidacionesQuery,
  findOneValidacionesQuery,
  createValidacionesQuery,
  findOneUsuarioQuery,
  findOneEstadoQuery,
  findOneAlumnoQuery,
  findOneNivelQuery,
) => async (identifierObj) => {
  const {
    alumnoId,
    usuarioId,
    estadoId,
    nivelId,
    tipoValidacionId,
    situacionValidacionId,
  } = identifierObj;

  const queryFunctions = {
    Alumno: [alumnoId, findOneAlumnoQuery],
    Usuario: [usuarioId, findOneUsuarioQuery],
    Estado: [estadoId, findOneEstadoQuery],
    Nivel: [nivelId, findOneNivelQuery],
    SituacionesValidacion: [tipoValidacionId, findOneSituacionesValidacionQuery],
    TipoValidaciones: [situacionValidacionId, findOneTipoValidacionesQuery],
  };
  const { Alumno, ...validatorFunctions } = queryFunctions;
  await checkers.findValidator({ Alumno });
  const alumnoDuplicate = await findOneValidacionesQuery({ alumnoId }, { attributes: ['id'] });
  if (alumnoDuplicate) {
    throw boom.conflict(`Alumno ${alumnoId} already exists`);
  }
  await checkers.findValidator(validatorFunctions);

  const alumnoValidation = await createValidacionesQuery(identifierObj);

  return alumnoValidation;
};

module.exports = { createAlumnoValidacion };
