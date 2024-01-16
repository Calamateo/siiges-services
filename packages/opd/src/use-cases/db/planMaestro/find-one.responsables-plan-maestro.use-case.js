const { checkers } = require('@siiges-services/shared');

const findOneResponsablesPlanMaestro = (
  findOnePlanMaestroQuery,
) => async ({ planMaestroId }) => {
  const include = [
    { association: 'responsablePlaneacion' },
    { association: 'responsableObra' },
  ];

  const planMaestro = await findOnePlanMaestroQuery({ id: planMaestroId }, {
    include,
  });
  checkers.throwErrorIfDataIsFalsy(planMaestro, 'Plan Maestro', planMaestroId);

  return planMaestro;
};

module.exports = { findOneResponsablesPlanMaestro };
