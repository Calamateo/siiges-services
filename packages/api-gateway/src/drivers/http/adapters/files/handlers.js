const { Logger } = require('@siiges-services/shared');
const boom = require('@hapi/boom');
const errorHandler = require('../../utils/errorHandler');
const { tipoExtension } = require('../../utils/constants');

async function findOneFile(req, reply) {
  try {
    const { ...data } = req.query;

    if (!data.tipoEntidad || !data.entidadId || !data.tipoDocumento) {
      throw boom.badRequest(
        '[files:finOne]: the request needs these query parameters: tipoEntidad, entidadId, tipoDocumento',
      );
    }
    Logger.info(`[files]: Getting files ${data.tipoDocumento} with entidadId ${data.entidadId}`);

    const identifierObj = await this.filesServices.getFileIdentifierObj(data);
    const file = await this.filesServices.findOneFile(identifierObj, null, null, true);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: file });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function uploadFile(req, reply) {
  try {
    const data = await req.saveRequestFiles();
    const archivoAdjunto = data.find((files) => files.fieldname === 'archivoAdjunto');
    if (!archivoAdjunto) {
      throw boom.badRequest('Archivo adjunto requerido.');
    }

    const tipoExtensionFiltered = tipoExtension
      .find((item) => item.mimeType === archivoAdjunto.mimetype);
    if (!tipoExtensionFiltered) {
      throw boom.unsupportedMediaType('Tipo de archivo no soportado.');
    }

    const { tipoEntidad, entidadId, tipoDocumento } = data[0].fields;
    if (!tipoEntidad || !entidadId || !tipoDocumento) {
      throw boom.badRequest(
        '[files:finOne]: the request needs these parameters: tipoEntidad, entidadId, tipoDocumento',
      );
    }

    Logger.info(`[files]: Uploading files ${tipoDocumento} with entidadId ${entidadId}`);

    const dataFile = {
      tipoEntidad: tipoEntidad.value,
      entidadId: entidadId.value,
      tipoDocumento: tipoDocumento.value,
    };

    const fileUploaded = await this.filesServices.uploadFile(dataFile, archivoAdjunto);

    return reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(fileUploaded);
  } catch (error) {
    return errorHandler(error, reply);
  }
}

async function deleteFile(req, reply) {
  try {
    const { ...data } = req.query;

    if (!data.tipoEntidad || !data.entidadId || !data.tipoDocumento) {
      throw boom.badRequest(
        '[files:finOne]: the request needs these parameters: tipoEntidad, entidadId, tipoDocumento',
      );
    }

    Logger.info('[files]: Deleting file');
    const fileDeleted = await this.filesServices.deleteFile(data);

    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(fileDeleted);
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = {
  findOneFile,
  uploadFile,
  deleteFile,
};
