const { checkers, Logger } = require('@siiges-services/shared');

const findFileOFAD = (
  findOneSolicitudProgramaQuery,
  GenerarOFAD,
) => async (solicitudId) => {
  Logger.info('[files.findFileOFAD.use-case]: Generando archivo de OFAD');
  const include = [{
    association: 'programa',
    include: [
      { association: 'programaTurnos' },
      { association: 'trayectoria' },
      {
        association: 'plantel',
        include: [{
          association: 'domicilio',
          include: [
            { association: 'estado' },
            { association: 'municipio' },
          ],
        },
        {
          association: 'directores',
          include: [
            { association: 'persona' },
            {
              association: 'formacionesDirectores',
              include: [{ association: 'formacion' }],
            },
          ],
        },
        {
          association: 'institucion',
          include: [
            { association: 'ratificacionesNombre' },
            {
              association: 'rector',
              include: [
                { association: 'persona' },
                {
                  association: 'formacionesRectores',
                  include: [{ association: 'formacion' }],
                },
              ],
            },
          ],
        }],
      }],
  },
  {
    association: 'diligencias',
    include: [{ association: 'persona' }],
  },
  {
    association: 'usuario',
    include: [{ association: 'persona' }],
  },
  { association: 'estatusSolicitud' }];

  const solicitud = await findOneSolicitudProgramaQuery({ id: solicitudId }, {
    undefined,
    include,
    strict: false,
  });

  checkers.throwErrorIfDataIsFalsy(solicitud, 'solicitud', solicitudId);

  const file = await GenerarOFAD(solicitud);
  return Buffer.from(file);
};

module.exports = { findFileOFAD };
