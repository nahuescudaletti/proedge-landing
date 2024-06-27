import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { Reveal } from '../Reveal';

export function CtaDark() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const templateParams = {
            useremail: email,
        };

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!;
        const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

        try {
            // Enviar el formulario usando EmailJS
            const response = await emailjs.send(serviceId, templateId, templateParams, userId);
            console.log('Email successfully sent!', response);

            // Mostrar el modal de éxito
            setShowSuccessModal(true);

            // Limpiar los campos del formulario después de 3 segundos
            setTimeout(() => {
                setShowSuccessModal(false);
                setEmail('');
            }, 3000);
        } catch (error) {
            console.error('Email send failed:', error);
            setMessage('There was an error subscribing. Please try again.');
        }
    };

    return (
        <div className="px-6 mb-20 md:mt-36">
            <div className="flex flex-col items-center text-white">
                <Reveal>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
                        <span className="block degradedBlue bg-Orange">
                            Newsletter
                        </span>
                    </h1>
                </Reveal>
                <Reveal>
                    <p className="w-full mx-auto mt-5 text-base md:text-xl font-light font-montserrat tracking-wide text-center mb-10">
                        Receive our latest news directly in your inbox.
                    </p>
                </Reveal>
                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    {/* Ajusta el ancho del formulario con max-w-lg o el valor deseado */}
                    <div className="flex">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="flex-1 px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-OrangeRadial bg-white text-black"
                            required
                        />
                        <button type="submit" className="px-4 py-3 rounded-r-md bg-OrangeRadial text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50">
                            Subscribe
                        </button>
                    </div>
                </form>
                {message && <p className="mt-2">{message}</p>}
            </div>

            {/* Modal de éxito */}
            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-green-500 p-8 rounded shadow-lg text-center">
                        <p className="text-lg font-semibold mb-2">Subscription Successful!</p>
                        <p>You will receive our latest news shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
}