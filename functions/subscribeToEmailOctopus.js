// functions/subscribeToEmailOctopus.js

const axios = require('axios');

exports.handler = async function (event, context) {
    const { email } = JSON.parse(event.body);

    const listId = process.env.EMAIL_OCTOPUS_LIST_ID;
    const apiKey = process.env.EMAIL_OCTOPUS_API_KEY;

    const formData = {
        email_address: email,
        status: 'subscribed',
    };

    try {
        const response = await axios.post(
            `https://emailoctopus.com/api/1.5/lists/${listId}/contacts`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Subscription successful' }),
        };
    } catch (error) {
        return {
            statusCode: error.response.status || 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
