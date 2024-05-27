const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Conexão banco Postegrees
      const PASSWORD_DB_POSTEGREES_DEV = config.env.PASSWORD_DB_POSTEGREES_DEV;

      if (!PASSWORD_DB_POSTEGREES_DEV) {
        throw new Error('Senha incorreta');
      }

      const { Client } = require('pg');

      const client = new Client({
        host: 'postgresql-inspirali-devhml-cluster.cluster-cjxg8cvlshhk.us-east-1.rds.amazonaws.com',
        user: 'servico_ingressar_gvc_dev',
        password: PASSWORD_DB_POSTEGREES_DEV,
        database: 'servico_ingressar_gvc_dev',
        port: 5432, // default port for PostgreSQL
      });

      client.connect();

      on('task', {
        queryDb: (query) => {
          return client.query(query)
            .then((res) => {
              return res.rows;
            })
            .catch((err) => {
              console.error('Error executing query:', err);
              throw err;
            });
        }
      });

      // Ensure the connection is closed properly after tests
      on('after:run', () => {
        client.end();
      });
    }
  }
});
