// Internal dependencies
const { Logger } = require('@siiges-services/shared');
const errorHandler = require('../../../utils/errorHandler');

async function registerUser(fastify, req) {
  const { ...data } = req.body;

  Logger.info('[api/usuarios/register]: registering user');
  const usuario = await fastify.usuarioServices.registerUser(data);

  return usuario;
}

async function sendEmailNotification(notificacionServices, emailDestination, idUser, userName) {
  Logger.info('[notification]: Sending notification');
  await notificacionServices.sendNotificationEmail({
    usuarioId: idUser,
    email: emailDestination,
    asunto: 'SIGES: Confirmación de Recepción de Solicitud para Creación de Usuario RVOE',
    template: 'preRegistroUsuario',
    params: {
      user: userName,
    },
  });
}

async function register(req, reply) {
  try {
    const newUsuario = await registerUser(this, req);
    const idUser = newUsuario.dataValues.id;
    const mail = req.body.correo;
    const userName = req.body.usuario;
    sendEmailNotification(this.notificacionServices, mail, idUser, userName);
    return reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: newUsuario });
  } catch (error) {
    Logger.error('[register]: Error occurred', { error }); // Log the error
    return errorHandler(error, reply);
  }
}

module.exports = register;
