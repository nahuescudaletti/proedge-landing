import fetch from 'node-fetch'; // Si estás usando módulos ES
// const fetch = require('node-fetch'); // Si estás usando CommonJS

export const handler = async (event) => {
    const { email } = JSON.parse(event.body);
    const apiKey = process.env.EMAILOCTOPUS_API_KEY;
    const listId = process.env.EMAILOCTOPUS_LIST_ID;

    const data = {
        api_key: apiKey,
        email_address: email,
        status: 'SUBSCRIBED',
    };

    try {
        const response = await fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
