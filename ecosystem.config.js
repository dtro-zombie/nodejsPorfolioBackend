module.exports = {
  apps: [
    {
      name: 'miPorfolio',
      script: './bin/www',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
        NODE_ENV: 'production',
        DATA_BASE_NAME:'Porfolio',
        DATA_BASE_HOST:'localhost',
        DATA_BASE_PASSWORD:'root',
        DATA_BASE_USER:'root',
      },
      env_production: {
       
      },
    },
  ],
};
