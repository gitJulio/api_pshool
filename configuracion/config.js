process.env.PORT = process.env.PORT || 7000;

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

const config = {
  db: {
    host: '35.239.128.238',
    port: "5432",
    database: 'puxbit',
    user: 'puxbit',
    password: 'N1lointentes2019'
  }
};

module.exports = config;
