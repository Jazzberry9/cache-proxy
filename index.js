#!/usr/bin/env node

const { Command } = require('commander');
const LeProxyServer = require('./server');
const program = new Command();

program
  .version('1.0.0')
  .description('My Node CLI')
  .option('-o, --origin <type>', 'add a origin')
  .option('-p, --port <type>', 'Add a port')
  .option('-c, --cache', 'Clean cache')
  .action((options) => {
    if (options.cache) {
      const serverOn = new LeProxyServer();
      serverOn.cleanCache();
      return;
    }
    if (!options.origin || !options.port) {
      console.log('port & origin are required');
    }

    const { origin, port } = options;
    const serverOn = new LeProxyServer(port, origin);
    serverOn.startServer();
  });

program.parse(process.argv);
