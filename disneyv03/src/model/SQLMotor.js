class SQLMotor {
    constructor(connection) {
      this.connection = connection;
    }
  
    conectar() {
      // Implementación de la conexión a la base de datos
    }
  
    desconectar() {
      // Implementación de la desconexión de la base de datos
    }
  
    ejecutarQuery(query) {
      // Implementación de la ejecución de una consulta SQL
    }
  
    ejecutarSentenciaUpdate(query) {
      // Implementación de la ejecución de una sentencia de actualización SQL
    }
  }
  
  module.exports = SQLMotor;
  