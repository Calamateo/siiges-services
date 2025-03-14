const { Logger } = require('@siiges-services/shared');
const errorHandler = require('../../../../utils/errorHandler');

async function findAllProgramas(req, reply) {
  try {
    const { acuerdoRvoe } = req.query;
    Logger.info('[Programas]: Getting programs list');
    const programs = await this.administracionAcademicaServices.findAllProgramas({ acuerdoRvoe });

    return reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data: programs });
  } catch (error) {
    return errorHandler(error, reply);
  }
}

module.exports = findAllProgramas;
