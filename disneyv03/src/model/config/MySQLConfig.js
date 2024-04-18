// config.js

class MySQLConfig {
    static getConfig() {
      return {
        host: 'endpoint-de-tu-base-de-datos-en-aws',
        user: 'usuario',
        password: 'contraseña',
        database: 'nombre-de-la-base-de-datos',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      };
    }
  }
  
  module.exports = MySQLConfig;
  