// Solicitud Folio Alumno
const solicitudFolioAlumno = {
  alumnoId: { type: 'integer' },
  solicitudFolioId: { type: 'integer' },
  fechaTermino: { type: 'string', format: 'date-time' },
  fechaElaboracion: { type: 'string', format: 'date-time' },
};

module.exports = { solicitudFolioAlumno };
