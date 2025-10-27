import { Command } from 'commander';
const program = new Command();

program
  .name('ProCached')
  .description('A simple caching proxy server CLI tool')

program.option('--port <number>','Port to run the proxy server').option('--origin <url>', 'Origin server URL to forward requests')
  .option('--clear-cache', 'Clear the cache')
  .parse(process.argv);

const opts=program.opts();
