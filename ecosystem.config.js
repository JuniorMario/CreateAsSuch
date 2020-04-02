module.exports = {
    apps: [{
      name: 'Create as Such',
      script: './bin/www',
      args: [
        '--color',
      ],
      watch: [
        ".",
        "ecosystem.config.js",
        "package.json"
      ],
      ignore_watch: [
        "node_modules",
        "docker",
        ".git"
      ],
    }]
};
  