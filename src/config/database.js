module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'login',
  define: {
    timestamps: false,
    underscored: true,
  },
};