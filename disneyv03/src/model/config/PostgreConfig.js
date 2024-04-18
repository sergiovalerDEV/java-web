// PostgreConfig.js

class PostgreConfig {
    static getConfig() {
      return {
        user: "postgres",
        host: "postgres.cf0m8qieoh0e.us-east-1.rds.amazonaws.com",
        database: "postgres",
        password: "LUCASLUCAS", // Considera usar variables de entorno para gestionar contraseñas
        port: 5432,
        ssl: {
        rejectUnauthorized: false, // Cambia a false si tienes problemas de certificados pero trata de evitarlo por seguridad
        // ca: fs.readFileSync('/path/to/server-ca.pem').toString(),
        // Es posible que AWS RDS requiera parámetros SSL específicos o archivos CA.
        // Comprueba la documentación de AWS RDS para obtener los detalles exactos.
        },
      };
    }
  }
  
  module.exports = PostgreConfig;
  