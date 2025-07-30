// External dependencies
const { models, queries } = require('@siiges-services/core');

const {
  Alumno,
  Programa,
  UsuarioUsuario,
  Grupo,
  AlumnoGrupo,
  Asignatura,
  Calificacion,
  CicloEscolar,
  Grado,
  Turno,
} = models;

const {
  createQuery,
  findOneQuery,
  findAllQuery,
  deleteAndFindQuery,
  updateAndFindQuery,
} = queries;

module.exports = {
  createAlumnoQuery: createQuery(Alumno),
  findOneAlumnoQuery: findOneQuery(Alumno),
  findOneGradoQuery: findOneQuery(Grado),
  findOneTurnoQuery: findOneQuery(Turno),
  findOneUserUsersQuery: findOneQuery(UsuarioUsuario),
  findOneProgramaQuery: findOneQuery(Programa),
  findOneGrupoQuery: findOneQuery(Grupo),
  findAllGrupoQuery: findAllQuery(Grupo),
  createGrupoQuery: createQuery(Grupo),
  findOneAlumnoGrupoQuery: findOneQuery(AlumnoGrupo),
  createAlumnoGrupoQuery: createQuery(AlumnoGrupo),
  findOneAsignaturaQuery: findOneQuery(Asignatura),
  findAllCalificacionesQuery: findAllQuery(Calificacion),
  findOneCalificacionQuery: findOneQuery(Calificacion),
  createCalificacionQuery: createQuery(Calificacion),
  updateCalificacionQuery: updateAndFindQuery(Calificacion),
  deleteCalificacionQuery: deleteAndFindQuery(Calificacion),
  findAllCiclosEscolaresQuery: findAllQuery(CicloEscolar),
  findOneCiclosEscolaresQuery: findOneQuery(CicloEscolar),
  createCicloEscolarQuery: createQuery(CicloEscolar),
};
