// External dependencies
// Internal dependencies
const { authAdapter, usuariosAdapter } = require('../../../adapters');
const schema = require('./schema');

async function authRouter(fastify, _, next) {
  await fastify.post(
    '/login',
    { schema: schema.loginSchema },
    authAdapter.loginUser,
  );

  await fastify.post(
    '/register',
    { schema: schema.registerSchema },
    usuariosAdapter.register,
  );

  next();
}

module.exports = authRouter;
