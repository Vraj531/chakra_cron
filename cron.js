const cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('*/3 * * * *', () => {
    console.log('Pinging Lambda API...');
    exec('node pingLambda.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`Script error: ${stderr}`);
            return;
        }
        console.log(`Script output: ${stdout}`);
    });
});
