const { checkers } = require('@siiges-services/shared');
const boom = require('@hapi/boom');

const createFolioDocumento = async (tipoDocumentoId, findOneLibroQuery, createLibroQuery) => {
  if (checkers.isUndefined(tipoDocumentoId)) {
    throw boom.badRequest('tipoDocumentoId is undefined');
  }

  const año = new Date().getFullYear();
  let libro = await findOneLibroQuery({ descripcion: año, tipoDocumentoId });

  if (!libro) {
    const consecutivo = await findOneLibroQuery({ descripcion: año - 1, tipoDocumentoId });

    const nombre = consecutivo ? consecutivo.nombre + 1 : 6;

    libro = await createLibroQuery({
      tipoDocumentoId,
      nombre,
      descripcion: año,
    });
  }

  return libro;
};

module.exports = {
  createFolioDocumento,
};
