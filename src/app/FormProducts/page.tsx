"use client"
import { useState } from 'react'; 
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const description2 = searchParams.get('description2');

    // Estado para controlar la visibilidad del modal de éxito
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Capturar los valores del formulario
        const formData = {
            product: (event.target as HTMLFormElement).product.value,
            firstName: (event.target as HTMLFormElement).firstName.value,
            lastname: (event.target as HTMLFormElement).lastname.value,
            country: (event.target as HTMLFormElement).country.value,
            email: (event.target as HTMLFormElement).email.value,
            phone: (event.target as HTMLFormElement).phone.value,
            help: (event.target as HTMLFormElement).help.value,
            budget: (event.target as HTMLFormElement).budget.value
        };

        // Configurar los parámetros para enviar el correo electrónico
        const params = {
            sender: { email: "nahueby17@gmail.com", name: "Nahuel Scudaletti" },
            to: [{ email: formData.email, name: formData.firstName }],
            subject: `New inquiry about ${formData.product}`,
            htmlContent: `
                <h1>New Inquiry</h1>
                <p>Product: ${formData.product}</p>
                <p>Name: ${formData.firstName} ${formData.lastname}</p>
                <p>Country: ${formData.country}</p>
                <p>Email: ${formData.email}</p>
                <p>Phone: ${formData.phone}</p>
                <p>Message: ${formData.help}</p>
                <p>Budget: ${formData.budget}</p>
            `,
            headers: { 'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY }
        };

        // Enviar el formulario usando Brevo
        try {
            const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', params);
            console.log('Email successfully sent!', response);

            // Mostrar el modal de éxito
            setShowSuccessModal(true);

            // Limpiar los campos del formulario después de 3 segundos
            setTimeout(() => {
                setShowSuccessModal(false);
                // Limpiar los campos del formulario
                if (event.target instanceof HTMLFormElement) {
                    event.target.reset();
                }
            }, 2500);
        } catch (error) {
            console.error('Email send failed:', error);
            // Aquí podrías manejar el error, por ejemplo mostrando un mensaje de error al usuario
        }
    };

    // Separar el texto de description2 por puntos y convertirlo en párrafos
    const descriptionParagraphs = description2
        ? description2.split('. ').map((paragraph, index, array) => {
            // Añadir el punto final solo si no es el último párrafo
            const paragraphWithPeriod = index < array.length - 1 ? `${paragraph}.` : paragraph;
            return <p key={index} className="text-base md:text-lg mb-4">{paragraphWithPeriod}</p>;
        })
        : null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: `url(${getBasePath()}/assets/gradient2.png)` }}>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h1>
                    {descriptionParagraphs}
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <form onSubmit={handleSubmit} className="w-full" style={{ backgroundColor: 'rgba(18, 24, 38, 1)', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="product">
                                Product
                            </label>
                            <input name="product" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="product" type="text" placeholder="Product" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" value={title ?? ''} readOnly />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="firstName">
                                First Name
                            </label>
                            <input name="firstName" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="firstName" type="text" placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="lastname">
                                Last Name
                            </label>
                            <input name="lastname" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="lastname" type="text" placeholder="Last Name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="Country">
                                Country
                            </label>
                            <input name="lastName" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="country" type="text" placeholder="Country" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="email">
                                Email
                            </label>
                            <input name="email" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="email" type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                            <input 
                                style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }}
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone Number" 
                                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                pattern="[0-9]*" 
                                inputMode="numeric" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="help">
                                How can we help you
                            </label>
                            <textarea name="help" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="help" placeholder="How can we help you?" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="budget">
                                Budget
                            </label>
                            <input name="budget" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="budget" type="text" placeholder="Budget" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Form submitted successfully!</h2>
                        <p className="text-gray-700">Thank you for your inquiry. We will get back to you soon.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
