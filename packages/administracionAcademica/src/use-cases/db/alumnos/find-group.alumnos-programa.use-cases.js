const { checkers } = require('@siiges-services/shared');

const findGroupAlumnosPrograma = (
  findOneProgramaQuery,
  findOneAlumnoQuery,
  findAllAlumnosQuery,
) => async (
  identifierObj,
) => {
  const { programaId, matricula } = identifierObj;

  const include = [
    { association: 'persona' },
    { association: 'situacion' },
  ];

  const programa = await findOneProgramaQuery({ id: programaId });
  checkers.throwErrorIfDataIsFalsy(programa, 'programas', programaId);

  if (matricula) {
    const alumno = await findOneAlumnoQuery(identifierObj, { include });
    checkers.throwErrorIfDataIsFalsy(alumno, 'alumnos', matricula);
    return alumno;
  }
  return findAllAlumnosQuery(programaId, {
    include,
    strict: false,
  });
};

module.exports = findGroupAlumnosPrograma;
