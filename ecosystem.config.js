module.exports = {
  apps: [
    {
      name: 'miPorfolio',
      script: './bin/www',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
