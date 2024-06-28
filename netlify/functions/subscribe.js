exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { email } = JSON.parse(event.body); // Extraer el campo de email del cuerpo JSON
        const listId = process.env.BRAVO_LIST_ID;
        const apiKey = process.env.BRAVO_API_KEY;

        // Importar node-fetch dinámicamente
        const fetch = await import('node-fetch').then(module => module.default);

        const data = {
            api_key: apiKey,
            email_address: email,
        };

        const response = await fetch(`https://api.bravodotcom.com/lists/${listId}/members`, {
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
