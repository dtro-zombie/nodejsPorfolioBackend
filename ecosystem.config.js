module.exports = {
  apps: [
    {
      name: 'miPorfolio',
      script: './bin/www',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        DATA_BASE_NAME:'plataforma',
        DATA_BASE_HOST:'127.0.0.1',
        DATA_BASE_PASSWORD:'plataforma',
        DATA_BASE_USER:'plataforma',
      },
      env_production: {
       
      },
    },
  ],
};
