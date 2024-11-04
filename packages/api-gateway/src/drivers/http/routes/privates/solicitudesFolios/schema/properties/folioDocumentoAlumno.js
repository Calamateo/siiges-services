// Folio Documento Alumno
const folioDocumentoAlumno = {
  solicitudFolioAlumnoId: { type: 'integer' },
  alumnoId: { type: 'integer' },
  tipoDocumentoId: { type: 'integer' },
  fojaId: { type: 'integer' },
  libroId: { type: 'integer' },
  folioDocumento: { type: 'string' },
  envioExitoso: { type: 'boolean' },
};

module.exports = { folioDocumentoAlumno };
