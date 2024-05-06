module.exports = {
  apps: [
    {
      name: 'miPorfolio',
      script: './bin/www',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        DATA_BASE_NAME:'plataforma',
        DATA_BASE_HOST:'localhost',
        DATA_BASE_PASSWORD:'plataforma',
        DATA_BASE_USER:'plataforma',
      },
      env_production: {
       
      },
    },
  ],
};
