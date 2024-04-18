const mysql = require('mysql2/promise');

class MySQLMotor {
  constructor(config) {
    this.pool = mysql.createPool(config);
  }

  async conectar() {
    try {
      // La conexión con el pool se establece automáticamente cuando se realiza la primera consulta
      const connection = await this.pool.getConnection();
      return connection;
    } catch (error) {
      throw new Error('Error al conectar con MySQL: ' + error.message);
    }
  }

  async desconectar(connection) {
    try {
      if (connection) {
        await connection.release(); // Liberar la conexión al pool
      }
    } catch (error) {
      throw new Error('Error al desconectar de MySQL: ' + error.message);
    }
  }

  async ejecutarQuery(query, values) {
    let connection;
    try {
      connection = await this.conectar();
      const [rows, fields] = await connection.execute(query, values);
      return rows;
    } catch (error) {
      throw new Error('Error al ejecutar la consulta en MySQL: ' + error.message);
    } finally {
      await this.desconectar(connection);
    }
  }

  async ejecutarSentenciaUpdate(query, values) {
    let connection;
    try {
      connection = await this.conectar();
      const result = await connection.execute(query, values);
      return result;
    } catch (error) {
      throw new Error('Error al ejecutar la sentencia de actualización en MySQL: ' + error.message);
    } finally {
      await this.desconectar(connection);
    }
  }
}

module.exports = MySQLMotor;
