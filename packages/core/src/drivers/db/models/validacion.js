const { Sequelize, Model, DataTypes } = require('sequelize');
const { ALUMNO_TABLE } = require('./alumno');
const { USUARIO_TABLE } = require('./usuario');
const { ESTADO_TABLE } = require('./estado');
const { NIVEL_TABLE } = require('./nivel');
const { SITUACION_VALIDACION_TABLE } = require('./situacionValidacion');
const { TIPO_VALIDACION_TABLE } = require('./tipoValidacion');

const VALIDACION_TABLE = 'validaciones';

const ValidacionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  alumnoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'alumno_id',
    unique: true,
    references: {
      model: ALUMNO_TABLE,
      key: 'id',
    },
  },
  usuarioId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'usuario_id',
    references: {
      model: USUARIO_TABLE,
      key: 'id',
    },
  },
  estadoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'estado_id',
    references: {
      model: ESTADO_TABLE,
      key: 'id',
    },
  },
  nivelId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'nivel_id',
    references: {
      model: NIVEL_TABLE,
      key: 'id',
    },
  },
  tipoValidacionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'tipo_validacion_id',
    references: {
      model: TIPO_VALIDACION_TABLE,
      key: 'id',
    },
  },
  situacionValidacionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'situacion_validacion_id',
    references: {
      model: SITUACION_VALIDACION_TABLE,
      key: 'id',
    },
  },
  folio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estatus: {
    type: DataTypes.STRING,
    defaultValue: 0,
  },
  fechaExpedicion: {
    type: DataTypes.DATE,
    field: 'fecha_expedicion',
  },
  nombreInstitucionEmisora: {
    type: DataTypes.STRING,
    field: 'nombre_institucion_emisora',
  },
  claveCentroTrabajoEmisor: {
    type: DataTypes.STRING,
    field: 'clave_centro_trabajo_emisor',
  },
  fechaInicioAntecedente: {
    type: DataTypes.DATE,
    field: 'fecha_inicio_antecedente',
  },
  fechaFinAntecedente: {
    type: DataTypes.DATE,
    field: 'fecha_fin_antecedente',
  },
  cedulaProfesional: {
    type: DataTypes.STRING,
    field: 'cedula_profesional',
  },
  archivoValidacion: {
    type: DataTypes.STRING,
    field: 'archivo_validacion',
  },
  fechaValidacion: {
    type: DataTypes.DATE,
    field: 'fecha_validacion',
  },
  observaciones: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: null,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
    defaultValue: null,
  },
};

class Validacion extends Model {
  static associate(models) {
    this.belongsTo(models.Alumno, { as: 'alumno' });
    this.belongsTo(models.Usuario, { as: 'usuario' });
    this.belongsTo(models.Estado, { as: 'estado' });
    this.belongsTo(models.Nivel, { as: 'nivel' });
    this.belongsTo(models.TipoValidacion, { as: 'tipo', foreignKey: 'tipo_validacion_id' });
    this.belongsTo(models.SituacionValidacion, { as: 'situacionValidacion', foreignKey: 'situacion_validacion_id' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: VALIDACION_TABLE,
      modelName: 'Validacion',
      timestamps: false,
    };
  }
}

module.exports = {
  VALIDACION_TABLE,
  ValidacionSchema,
  Validacion,
};
