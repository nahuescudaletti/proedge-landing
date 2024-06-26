"use client"
import { useState } from 'react'; // Importa useState desde React
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import emailjs from 'emailjs-com';

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const description2 = searchParams.get('description2');
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
    
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
            name: formData.firstName,
            lastname: formData.lastname,
            product: formData.product,
            country: formData.country,
            email: formData.email,
            phone: formData.phone,
            message: formData.help,
            budget: formData.budget
        };

        // Verificar si serviceId y templateId están definidos antes de enviar el correo electrónico
        if (serviceId && templateId) {
            try {
                // Enviar el formulario usando EmailJS
                const response = await emailjs.send(serviceId, templateId, params, userId);
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
        } else {
            console.error('EmailJS service ID or template ID is not defined.');
            // Aquí podrías manejar el caso donde serviceId o templateId no están definidos, por ejemplo mostrando un mensaje de error al usuario
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
                            <textarea name="help" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="help" placeholder="How can we help you" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" required />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="budget">
                                Expected Budget:
                            </label>
                            <select name="budget" style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="budget" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                                <option>$1k - $3k</option>
                                <option>$3k - $7k</option>
                                <option>$7k - $15k</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-center">
                            <button type="submit" className="px-4 py-3 rounded-md bg-OrangeRadial text-white font-semibold hover:bg-yellow-400 focus:outline-none focus:shadow-outline">
                                Send Inquiry
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Modal de éxito */}
            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-green-500 p-8 rounded shadow-lg text-center">
                        <p className="text-lg font-semibold mb-2">Request sent successfully!</p>
                    </div>
                </div>
            )}
            <button
                onClick={() => router.back()}
                className="mt-20 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go Back
            </button>
        </div>
    );
}
