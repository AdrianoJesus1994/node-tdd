module.exports = {
  development: {
    username: "postgres",
    password: "Meire2107",
    database: "node_tdd",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    sername: "postgres",
    password: "Meire2107",
    database: "node_tdd",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  production: {
    sername: "postgres",
    password: "Meire2107",
    database: "node_tdd",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgres",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
};
