const { checkers } = require('@siiges-services/shared');

const updateSolcitudSeccionObservacion = (
  findOneSolicitudSeccionQuery,
  createSolcitudSeccionQuery,
  updateSolicitudSeccionQuery,
  findOneSeccionQuery,
  findOneSolicitudQuery,
) => async (data) => {
  const {
    seccionId,
    solicitudId,
    observaciones,
  } = data;

  // Validations checker
  const solicitudValidation = await findOneSolicitudQuery({ id: solicitudId }, { attributes: ['id'] });
  checkers.throwErrorIfDataIsFalsy(solicitudValidation, 'Solicitud', solicitudId);
  const seccionValidation = await findOneSeccionQuery({ id: seccionId }, { attributes: ['id'] });
  checkers.throwErrorIfDataIsFalsy(seccionValidation, 'Seccion', seccionId);

  // find if exist
  const SeccionObservaciones = await findOneSolicitudSeccionQuery({
    seccionId,
    solicitudId,
  });

  // Create or update
  let newSeccionObservaciones;
  let statusCode;

  if (SeccionObservaciones) {
    newSeccionObservaciones = await updateSolicitudSeccionQuery(
      { id: SeccionObservaciones.id },
      { observaciones },
    );
    statusCode = 200;
  } else {
    newSeccionObservaciones = await createSolcitudSeccionQuery(data);
    statusCode = 201;
  }

  // const include = [
  //   {
  //     association: 'usuario',
  //     attributes: ['id', 'usuario', 'correo'],
  //   },
  // ];

  // const mailOptions = {
  //   usuarioId: getInformation.usuario.id,
  //   email: getInformation.usuario.correo,
  //   params: {
  //     email: getInformation.usuario.correo,
  //     usuario: getInformation.usuario.usuario,
  //     folio: getInformation.folio,
  //     observacion: experiment,
  //     seccion: seccionValidation.nombre,
  //   },
  // };

  return { statusCode, newSeccionObservaciones };
};

module.exports = updateSolcitudSeccionObservacion;
