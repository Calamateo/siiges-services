const createAlumno = require('./create.handlers.alumno.adapters');
const findOneAlumno = require('./find-one.handlers.alumno.adapters');
const updateAlumno = require('./update.handlers.alumno.adapters');
const findGroupAlumnosPrograma = require('./find-group.handlers.alumnos-programa.adapters');
const deleteAlumno = require('./delete.handlers.alumno.adapters');
const alumnosInscripcion = require('./create-update.handlers.alumnos-inscripcion.adapters');
const findAlumnosInscritos = require('./find-group.handlers.alumnos-inscritos');
const findAlumnosGrupo = require('./find-group.handlers.alumnos-grupo.adapters');

module.exports = {
  createAlumno,
  findOneAlumno,
  updateAlumno,
  findGroupAlumnosPrograma,
  deleteAlumno,
  alumnosInscripcion,
  findAlumnosInscritos,
  findAlumnosGrupo,
};
