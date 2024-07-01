"use client";
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa'; // Importar el ícono de flecha izquierda de react-icons

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const description2 = searchParams.get('description2');

    // Separate the description2 text by periods and convert it into paragraphs
    const descriptionParagraphs = description2
        ? description2.split('. ').map((paragraph, index, array) => {
            // Add the final period only if it is not the last paragraph
            const paragraphWithPeriod = index < array.length - 1 ? `${paragraph}.` : paragraph;
            return <p key={index} className="text-base md:text-lg mb-4">{paragraphWithPeriod}</p>;
        })
        : null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: `url(${getBasePath()}/assets/gradient2.png)` }}>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between text-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 pt-20 md:pt-0">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h1>
                    {descriptionParagraphs}
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <iframe
                        width="100%"
                        height="1000px"
                        src="https://c80e6f6d.sibforms.com/serve/MUIFAPmiQrSmWX1-GjvkFS9GKLvk56Z6vqC8Io0-PQ_ysIyGN2-8oz_7LbIBsy3-fr7QaWwH-nx-lIHwFyW5oA-rq3eUvWpRIjKMK9tG6VjTzNucqoF3ujhTiUkk5aZE771TOnTYBzZVAVR-nuQzTR7uihqpw9e7VZ99fey-U6Zh95DPgbiZ8vdAMOaHNq4bkHLrVWcle0cGrnY1"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                        style={{ display: 'block' }}
                    ></iframe>
                </div>
            </div>
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
                <FaArrowLeft className="mr-2" /> Back
            </button>
        </div>
    );
}
