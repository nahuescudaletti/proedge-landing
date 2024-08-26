import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      firstName, lastName, products, country, email, phone, helpYou, contactByWsp, expectedBudget
    } = req.body;

    // Verificar datos recibidos
    console.log('Datos recibidos:', {
      email, firstName, lastName, country, phone, helpYou, contactByWsp, expectedBudget, products
    });

    try {
      // Enviar datos a Brevo
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts',
        {
          email,
          attributes: {
            FIRSTNAME: firstName,
            LASTNAME: lastName,
            COUNTRY: country,
            PHONE: phone,
            HELPYOU: helpYou,
            BUDGET: expectedBudget,  // Campo esperado
            PRODUCTS: products,     // Campo de productos
            CONTACT_WSP: contactByWsp  // Convertir 'Yes' o 'No' a 'Sí' o 'No'
          },
          listIds: [3],  // Lista de IDs a la que se añadirá el contacto
        },
        {
          headers: {
            'api-key': process.env.BREVO_API_KEY!,
            'Content-Type': 'application/json',
          },
        }
      );

      res.status(200).json({ message: 'Contacto añadido con éxito' });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error al añadir el contacto:', error.response?.data || error.message);
        res.status(error.response?.status || 500).json({ message: 'Error al añadir el contacto' });
      } else {
        console.error('Error inesperado:', error);
        res.status(500).json({ message: 'Error inesperado' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
