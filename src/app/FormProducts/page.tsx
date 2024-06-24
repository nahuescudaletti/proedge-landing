"use client"
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const description2 = searchParams.get('description2');

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
                    <form className="w-full" style={{ backgroundColor: 'rgba(18, 24, 38, 1)', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="firstName">
                                First Name
                            </label>
                            <input style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="firstName" type="text" placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="lastName">
                                Last Name
                            </label>
                            <input style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="lastName" type="text" placeholder="Last Name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="email">
                                Email
                            </label>
                            <input style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="email" type="email" placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="phone">
                                Phone Number
                            </label>
                            <input style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="phone" type="tel" placeholder="Phone Number" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="help">
                                How can we help you
                            </label>
                            <textarea style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="help" placeholder="How can we help you" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label style={{ color: 'white' }} htmlFor="budget">
                                Expected Budget:
                            </label>
                            <select style={{ backgroundColor: 'rgb(48, 54, 73)', borderColor: 'rgb(41, 47, 59)', color: 'rgb(144, 144, 144)' }} id="budget" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline">
                                <option>$1k - $3k</option>
                                <option>$3k - $7k</option>
                                <option>$7k - $15k</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="px-4 py-3 rounded-md bg-OrangeRadial" type="button">
                                Send Inquiry
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <button
                onClick={() => router.back()}
                className="mt-20 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go Back
            </button>
        </div>
    );
}
