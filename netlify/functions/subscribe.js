const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { email } = JSON.parse(event.body);
        const listId = process.env.EMAIL_OCTOPUS_LIST_ID;
        const apiKey = process.env.EMAIL_OCTOPUS_API_KEY;

        const data = {
            api_key: apiKey,
            email_address: email,
            status: 'SUBSCRIBED',
        };

        const response = await fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to subscribe contact: ${errorText}`);
        }

        const result = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.error('Failed to subscribe contact:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
