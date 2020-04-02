module.exports = {
    apps: [{
      name: 'Create as Such',
      script: './bin/www',
      args: [
        '--color',
      ],
      watch: [
        ".",
      ],
      ignore_watch: [
        "node_modules",
        "docker",
        ".git"
      ],
    }]
};
  