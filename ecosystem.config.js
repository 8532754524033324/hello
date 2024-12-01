module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'yoshimon852',
      host : '34.97.159.191',
      ref  : 'origin/main',
      repo : 'https://github.com/8532754524033324/hello.git',
      path : '/var/www/html/hello',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
