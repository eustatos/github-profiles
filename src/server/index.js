/* eslint-disable no-console */
import server from './server';

process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });

server.listen(8090, () => {
    console.log('Server running on https://localhost:8090');
});
