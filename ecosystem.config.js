module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'index.js', // 起動スクリプトを正しく指定
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ],

  deploy: {
    production: {
      user: 'yoshimon852',
      host: '34.97.159.191',
      ref: 'origin/main',
      repo: 'https://github.com/8532754524033324/hello.git',
      path: '/var/www/html/hello',
      'pre-deploy-local': '',
      'post-deploy': 'cd /var/www/html/hello/current && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
