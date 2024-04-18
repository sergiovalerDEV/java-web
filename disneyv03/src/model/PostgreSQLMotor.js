const { Pool } = require('pg');

class PostgreSQLMotor {
  constructor(config) {
    this.pool = new Pool(config);
  }

  async conectar() {
    try {
      const client = await this.pool.connect();
      return client;
    } catch (error) {
      throw new Error('Error al conectar con PostgreSQL: ' + error.message);
    }
  }

  async desconectar(client) {
    try {
      if (client) {
        await client.release(); // Liberar el cliente al pool
      }
    } catch (error) {
      throw new Error('Error al desconectar de PostgreSQL: ' + error.message);
    }
  }

  async ejecutarQuery(query, values) {
    let client;
    try {
      client = await this.conectar();
      const result = await client.query(query, values);
      return result.rows;
    } catch (error) {
      throw new Error('Error al ejecutar la consulta en PostgreSQL: ' + error.message);
    } finally {
      await this.desconectar(client);
    }
  }

  async ejecutarSentenciaUpdate(query, values) {
    let client;
    try {
      client = await this.conectar();
      const result = await client.query(query, values);
      return result.rowCount;
    } catch (error) {
      throw new Error('Error al ejecutar la sentencia de actualización en PostgreSQL: ' + error.message);
    } finally {
      await this.desconectar(client);
    }
  }
}

module.exports = PostgreSQLMotor;
