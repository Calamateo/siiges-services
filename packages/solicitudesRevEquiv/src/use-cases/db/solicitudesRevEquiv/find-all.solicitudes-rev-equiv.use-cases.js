const findAllSolicitudesRevEquiv = (
  findAllSolicitudesRevEquivQuery,
) => async (query = {}) => {
  const filteredQuery = Object.fromEntries(
    // eslint-disable-next-line no-unused-vars
    Object.entries(query).filter(([_, value]) => value !== undefined),
  );

  const include = [
    {
      association: 'interesado',
      include: [
        { association: 'persona', include: [{ association: 'domicilio' }] },
        { association: 'institucionProcedencia' },
        {
          association: 'institucionDestino',
          include: [{
            association: 'programa',
            include: [{
              association: 'plantel',
              include: [{
                association: 'institucion',
              }],
            }],
          }],
        },
        { association: 'asignaturasAntecedenteEquivalente' },
      ],
    },
  ];

  return findAllSolicitudesRevEquivQuery(
    filteredQuery,
    { include, strict: false },
  );
};

module.exports = findAllSolicitudesRevEquiv;
