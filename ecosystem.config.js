module.exports = {
    apps: [{
      name: 'Create as Such',
      script: './server/bin/www',
      args: [
        '--color',
      ],
      watch: [ 
        ".",
        "server",
      ],
      ignore_watch: [
        "docker",
        ".git"
      ],
    }]
};
  