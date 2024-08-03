const fetch = require('node-fetch');

const pingLambdaAPI = async () => {
    const url = process.env.LAMBDA_API_URL; // Use environment variable

    if (!url) {
        console.error('LAMBDA_API_URL is not defined.');
        return;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log('Lambda API pinged successfully.');
        } else {
            console.error('Error pinging Lambda API:', response.statusText);
        }
    } catch (error) {
        console.error('Error pinging Lambda API:', error);
    }
};

pingLambdaAPI();